import React from "react";
import { Box, Button, Group, Paper, Skeleton, Text } from "@mantine/core";
import {
  NFT,
  ThirdwebNftMedia,
  useContract,
  useValidDirectListings,
} from "@thirdweb-dev/react";
import Link from "next/link";
import {
  MARKETPLACE_ADDRESS,
  NFT_COLLECTION_ADDRESS,
} from "../const/addresses";

type Props = {
  nft: NFT;
  showModal: any;
};

function truncateNFTContractAddress(
  address: string,
  startLength = 6,
  endLength = 4
) {
  if (address.length !== 42) {
    return "Invalid Address"; // Check if the address length is not 42 characters
  }

  const truncatedStart = address.slice(0, startLength);
  const truncatedEnd = address.slice(-endLength);

  return `${truncatedStart}...${truncatedEnd}`;
}

function ProfileItemCard({ nft, showModal }: Props) {
  const { contract: marketplace, isLoading: loadingMarketplace } = useContract(
    MARKETPLACE_ADDRESS,
    "marketplace-v3"
  );
  const { data: directListing, isLoading: loadingDirectListing } =
    useValidDirectListings(marketplace, {
      tokenContract: NFT_COLLECTION_ADDRESS,
      tokenId: nft.metadata.id,
    });

  return (
    <Paper withBorder radius="md" className=" overflow-hidden">
      <Box className="h-[10rem] overflow-hidden">
        <ThirdwebNftMedia
          metadata={nft.metadata}
          className="!object-cover !w-full !h-full"
        />
      </Box>
      <Box className="space-y-4 px-4 py-4">
        <Box>
          <Text size="lg">{nft.metadata.name}</Text>
          <Text size="sm">
            created by: <span>{truncateNFTContractAddress(nft.owner)}</span>
          </Text>
        </Box>
        <Skeleton></Skeleton>
        <Group justify="space-between">
          {loadingMarketplace ? (
            <h1>loading...</h1>
          ) : directListing && directListing[0] ? (
            <>
              <Box>
                <Text size="sm">Price:</Text>
                <Text size="lg">{`${directListing[0]?.currencyValuePerToken.displayValue} ${directListing[0]?.currencyValuePerToken.symbol}`}</Text>
              </Box>
            </>
          ) : (
            <>
              <Box>
                <Text size="sm">Price:</Text>
                <Text size="lg">Not listed</Text>
              </Box>
              <Button onClick={showModal} variant="default">
                List NFT
              </Button>
            </>
          )}
        </Group>
      </Box>
    </Paper>
  );
}

export default ProfileItemCard;
