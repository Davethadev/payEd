import { NFT } from "@thirdweb-dev/sdk";
import React, { useState } from "react";
import {
  MARKETPLACE_ADDRESS,
  NFT_COLLECTION_ADDRESS,
} from "../const/addresses";
import {
  Web3Button,
  useContract,
  useCreateDirectListing,
} from "@thirdweb-dev/react";
import { Box, Input, Stack } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useRouter } from "next/router";

type Props = {
  nft: NFT;
  close: () => void;
};

type DirectFormData = {
  nftContractAddress: string;
  tokenId: string;
  prices: string;
  startDate: Date;
  endDate: Date;
};

function ListingForm({ nft }: Props) {
  const router = useRouter();
  const { contract: marketplace } = useContract(
    MARKETPLACE_ADDRESS,
    "marketplace-v3"
  );
  const { contract: nftCollection } = useContract(NFT_COLLECTION_ADDRESS);
  const { mutateAsync: createDirectListing } =
    useCreateDirectListing(marketplace);

  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());
  const [price, setPrice] = useState<string>("0.01");

  async function checkAndProvideApproval() {
    console.log(price);
    if (price.trim().length == 0 || price == "0") return;
    const hasApproval = await nftCollection?.call("isApprovedForAll", [
      nft.owner,
      MARKETPLACE_ADDRESS,
    ]);

    if (!hasApproval) {
      const txResult = await nftCollection?.call("setApprovalForAll", [
        MARKETPLACE_ADDRESS,
        true,
      ]);

      if (txResult) {
        console.log("Approval provided");
      }
    }

    return true;
  }

  async function handleSubmitDirect() {
    await checkAndProvideApproval();
    if (startDate && endDate) {
      const txResult = await createDirectListing({
        assetContractAddress: NFT_COLLECTION_ADDRESS,
        tokenId: nft.metadata.id,
        pricePerToken: price,
        startTimestamp: startDate,
        endTimestamp: endDate,
      });

      return txResult;
    }
  }

  return (
    <Box className="flex flex-col !justify-between h-full ">
      <Stack>
        <Input.Wrapper label="Listing Price">
          <Input
            value={price}
            type="number"
            onChange={(event) => setPrice(event.target.value)}
            placeholder="Enter Price"
          />
        </Input.Wrapper>
        <DateInput
          value={startDate}
          onChange={setStartDate}
          label="Listing start date"
          placeholder="Enter start date"
        />
        <DateInput
          value={endDate}
          onChange={setEndDate}
          label="Listing end date"
          placeholder="Enter end date"
        />
      </Stack>
      <Web3Button
        className="!bg-purple-800 !text-white"
        contractAddress={MARKETPLACE_ADDRESS}
        action={async () => {
          await handleSubmitDirect();
        }}
        onSuccess={(txResult) => {
          close();
        }}
      >
        Create Direct Listing
      </Web3Button>
    </Box>
  );
}

export default ListingForm;
