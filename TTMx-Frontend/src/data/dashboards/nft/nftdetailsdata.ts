import nft5 from '/images/nft-images/5.png';
import nft7 from '/images/nft-images/7.png';
import nft10 from '/images/nft-images/10.png';
import nft12 from '/images/nft-images/12.png';
import nft13 from '/images/nft-images/13.png';
import nft14 from '/images/nft-images/14.png';

interface NftListItemType {
    id: number;
    name: string;
    address: string;
    price: number;
    time: string;
    image: string;
    liClass?: string;
}

interface NftDataItemType {
    id: number;
    label: string;
    value: string | number;
}

interface NftInfoItemType {
    id: number;
    label: string;
    value: string;
}

interface NftRatingType {
    id: number;
    stars: number;
    percentage: number;
    count: number;
    color: string;
    class: string;
}

export const NftList: NftListItemType[] = [
    {
        id: 1,
        name: 'CryptoKing',
        address: '0xC4F25B8A...5623',
        price: 1.7,
        time: 'March 25, 2025, 02:30 PM',
        image: nft5,
    },
    {
        id: 2,
        name: 'NinjaBoi',
        address: '0xA1B2C3D4...8901',
        price: 1.6,
        time: 'March 25, 2025, 02:00 PM',
        image: nft7,
        liClass: "border-top-0",
    },
    {
        id: 3,
        name: 'TheRuler',
        address: '0xE6A7C8D9...2341',
        price: 1.5,
        time: 'March 25, 2025, 01:45 PM',
        image: nft10,
        liClass: "border-top-0",
    },
    {
        id: 4,
        name: 'BlockMaster',
        address: '0xD3F5A1E6...9872',
        price: 1.4,
        time: 'March 25, 2025, 01:30 PM',
        image: nft12,
        liClass: "border-top-0",
    },
    {
        id: 5,
        name: 'PixelQueen',
        address: '0xA9D0B7C1...3410',
        price: 1.3,
        time: 'March 25, 2025, 01:00 PM',
        image: nft13,
        liClass: "border-top-0",
    },
    {
        id: 6,
        name: 'CryptoFanatic',
        address: '0xB3C1A8D0...8921',
        price: 1.2,
        time: 'March 25, 2025, 12:30 PM',
        image: nft14,
        liClass: "border-top-0",
    },
],
    NftData: NftDataItemType[] = [
        { id: 1, label: 'Artist Name', value: 'PixelWarrior', },
        { id: 2, label: 'NFT ID', value: 'NFT-12345', },
        { id: 3, label: 'Category/Type', value: 'Cyberpunk, Artwork', },
        { id: 4, label: 'Number of Bids', value: 15, },
        { id: 5, label: 'Creation Date', value: '2025-03-24', },
    ],
    NftInfo: NftInfoItemType[] = [
        { id: 1, label: 'NFT Title', value: 'Cyber Samurai' },
        { id: 2, label: 'Edition', value: 'Legendary' },
        { id: 3, label: 'Material', value: 'Neon Armor' },
        { id: 4, label: 'Sale Date', value: 'Mar 10, 2024' },
        { id: 5, label: 'Average Rating', value: '4.8/5' },
        { id: 6, label: 'Background', value: 'Futuristic Cityscape' },
        { id: 7, label: 'Eyes', value: 'Cybernetic Glow' },
        { id: 8, label: 'Country of origin', value: 'USA' },
        { id: 9, label: 'Description', value: 'A stunning cyberpunk artwork depicting a futuristic samurai with neon armor' },
    ],
    NftRatings: NftRatingType[] = [
        { id: 1, stars: 5, percentage: 55, count: 10, color: 'success', class: 'mb-3' },
        { id: 2, stars: 4, percentage: 22, count: 6, color: 'success', class: 'mb-3' },
        { id: 3, stars: 3, percentage: 8, count: 4, color: 'success', class: 'mb-3' },
        { id: 4, stars: 2, percentage: 9, count: 1, color: 'warning', class: 'mb-3' },
        { id: 5, stars: 1, percentage: 6, count: 1, color: 'danger', class: '' },
    ];