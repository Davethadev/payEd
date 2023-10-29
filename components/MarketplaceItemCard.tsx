import {
  Box,
  Button,
  Group,
  Image,
  Paper,
  Skeleton,
  Text,
} from "@mantine/core";
import {
  MARKETPLACE_ADDRESS,
  NFT_COLLECTION_ADDRESS,
} from "../const/addresses";
import {
  DirectListingV3,
  NFT,
  ThirdwebNftMedia,
  useContract,
  useValidDirectListings,
} from "@thirdweb-dev/react";
import Link from "next/link";

type Props = {
  nft: DirectListingV3;
};

export default function MarketplaceItemCard({ nft }: Props) {
  // const { contract: marketplace, isLoading: loadingMarketplace } = useContract(
  //   MARKETPLACE_ADDRESS,
  //   "marketplace-v3"
  // );
  // const { data: directListing, isLoading: loadingDirectListing } =
  //   useValidDirectListings(marketplace, {
  //     tokenContract: NFT_COLLECTION_ADDRESS,
  //     tokenId: nft.metadata.id,
  //   });

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

  return (
    <Link
      key={nft.asset.id}
      href={`/marketplace/token/${nft.assetContractAddress}/${nft.asset.id}`}
    >
      <Paper withBorder radius="md" className=" overflow-hidden">
        <Box className="h-[10rem] overflow-hidden">
          <ThirdwebNftMedia
            metadata={nft.asset}
            className="!object-cover !w-full !h-full"
          />
        </Box>
        <Box className="space-y-4 px-4 py-4">
          <Box>
            <Text size="lg" className="font-medium">
              {nft.asset.name}
            </Text>
            <Text size="sm">
              created by:{" "}
              <span>{truncateNFTContractAddress(nft.creatorAddress)}</span>
            </Text>
          </Box>
          <Skeleton></Skeleton>
          <Group justify="space-between">
            <Box>
              <Text size="sm">Price:</Text>
              <Text size="lg">{`${nft.currencyValuePerToken.displayValue} ${nft?.currencyValuePerToken.symbol}`}</Text>
            </Box>

            <Button
              variant="default"
              className="border-purple-800 text-purple-800 "
            >
              View
            </Button>
          </Group>
        </Box>
      </Paper>
    </Link>
  );
}
