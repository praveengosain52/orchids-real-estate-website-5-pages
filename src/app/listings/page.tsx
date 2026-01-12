"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Bed, Bath, Square, Search, SlidersHorizontal } from "lucide-react";

const listings = [
  {
    id: 1,
    title: "Modern Sunset Villa",
    location: "Beverly Hills, CA",
    price: "$2,500,000",
    beds: 4,
    baths: 3,
    sqft: "3,200",
    type: "Villa",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    title: "Urban Luxury Loft",
    location: "Downtown, NYC",
    price: "$1,850,000",
    beds: 2,
    baths: 2,
    sqft: "1,500",
    type: "Loft",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    title: "Coastal Breeze Mansion",
    location: "Malibu, CA",
    price: "$5,900,000",
    beds: 6,
    baths: 5,
    sqft: "5,800",
    type: "Mansion",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    title: "Pine Valley Retreat",
    location: "Aspen, CO",
    price: "$3,200,000",
    beds: 5,
    baths: 4,
    sqft: "4,100",
    type: "Cabin",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 5,
    title: "Emerald Bay Estate",
    location: "Laguna Beach, CA",
    price: "$4,750,000",
    beds: 5,
    baths: 6,
    sqft: "5,200",
    type: "Estate",
    image: "https://images.unsplash.com/photo-1600607687940-47a0f925901e?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 6,
    title: "Skyline Penthouse",
    location: "Chicago, IL",
    price: "$2,100,000",
    beds: 3,
    baths: 3,
    sqft: "2,800",
    type: "Penthouse",
    image: "https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e?auto=format&fit=crop&q=80&w=800",
  }
];

export default function ListingsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
        <div>
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">Property Listings</h1>
          <p className="text-zinc-500 dark:text-zinc-400">Discover your perfect home from our curated selection.</p>
        </div>
        <div className="flex gap-4 w-full md:w-auto">
          <div className="relative flex-1 md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 w-4 h-4" />
            <Input placeholder="Search location..." className="pl-10 h-11" />
          </div>
          <Button variant="outline" className="h-11 gap-2">
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </Button>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 mb-10">
        <Select defaultValue="all">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Property Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="villa">Villa</SelectItem>
            <SelectItem value="loft">Loft</SelectItem>
            <SelectItem value="mansion">Mansion</SelectItem>
            <SelectItem value="estate">Estate</SelectItem>
          </SelectContent>
        </Select>

        <Select defaultValue="price-asc">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort By" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="price-asc">Price: Low to High</SelectItem>
            <SelectItem value="price-desc">Price: High to Low</SelectItem>
            <SelectItem value="newest">Newest First</SelectItem>
          </SelectContent>
        </Select>

        <Select defaultValue="any">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Bedrooms" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="any">Any Bedrooms</SelectItem>
            <SelectItem value="1">1+ Bed</SelectItem>
            <SelectItem value="2">2+ Beds</SelectItem>
            <SelectItem value="3">3+ Beds</SelectItem>
            <SelectItem value="4">4+ Beds</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {listings.map((prop) => (
          <Card key={prop.id} className="group overflow-hidden border-zinc-200 dark:border-zinc-800 hover:shadow-xl transition-all duration-300">
            <div className="relative h-64 overflow-hidden">
              <Image
                src={prop.image}
                alt={prop.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <Badge className="absolute top-4 left-4 bg-white/90 text-zinc-900 backdrop-blur-sm border-none">
                {prop.type}
              </Badge>
            </div>
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">{prop.title}</h3>
                <p className="text-blue-600 font-bold">{prop.price}</p>
              </div>
              <div className="flex items-center gap-1 text-zinc-500 dark:text-zinc-400 mb-6 text-sm">
                <MapPin className="w-4 h-4" />
                {prop.location}
              </div>
              <div className="flex justify-between items-center pt-4 border-t border-zinc-100 dark:border-zinc-800">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1 text-zinc-600 dark:text-zinc-400 text-sm">
                    <Bed className="w-4 h-4 text-blue-500" /> {prop.beds}
                  </div>
                  <div className="flex items-center gap-1 text-zinc-600 dark:text-zinc-400 text-sm">
                    <Bath className="w-4 h-4 text-blue-500" /> {prop.baths}
                  </div>
                  <div className="flex items-center gap-1 text-zinc-600 dark:text-zinc-400 text-sm">
                    <Square className="w-4 h-4 text-blue-500" /> {prop.sqft}
                  </div>
                </div>
                <Link href={`/listings/${prop.id}`}>
                  <Button variant="outline" size="sm" className="rounded-lg">View Details</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
