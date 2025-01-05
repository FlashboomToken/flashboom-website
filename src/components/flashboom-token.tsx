"use client";

import React, { useState, useEffect } from 'react';
import { Copy, ExternalLink, Twitter } from 'lucide-react';
import { Alert, AlertDescription } from "./ui/alert";
import { Button } from "./ui/button";
import Image from "next/image";

interface RoadmapStep {
  title: string;
  items: string[];
  status: 'completed' | 'ongoing' | 'upcoming';
}

const FlashBoomToken = () => {
  const [tokensBurned, setTokensBurned] = useState<number>(2451);
  const [holders, setHolders] = useState<number>(1000); // New state for holders count
  const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || "";
  
  const PANCAKESWAP_URL = process.env.NEXT_PUBLIC_PANCAKESWAP_URL || "";
  const TWITTER_URL = process.env.NEXT_PUBLIC_TWITTER_URL || "";
  const BSCSCAN_URL = process.env.NEXT_PUBLIC_BSCSCAN_URL || "";

  useEffect(() => {
    // Simulation of burned tokens increase
    const burnInterval = setInterval(() => {
      setTokensBurned(prev => prev + Math.floor(Math.random() * 5));
    }, 60000);

    // Simulation of holders increase
    const holdersInterval = setInterval(() => {
      setHolders(prev => prev + Math.floor(Math.random() * 3));
    }, 120000);

    return () => {
      clearInterval(burnInterval);
      clearInterval(holdersInterval);
    };
  }, []);

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress);
    } catch (err) {
      console.error('Failed to copy address:', err);
    }
  };

  const steps: RoadmapStep[] = [
    {
      title: "Phase 1 - Launch",
      items: ["BscScan Verification", "Community Airdrop", "PancakeSwap Listing"],
      status: "completed"
    },
    {
      title: "Phase 2 - Expansion",
      items: ["Additional Platform Listings", "Influencer Marketing", "Community Growth"],
      status: "ongoing"
    },
    {
      title: "Phase 3 - Development",
      items: ["Strategic Partnerships", "External Audits", "Global Marketing Push"],
      status: "upcoming"
    }
  ];

  const keyFeatures = [
    "Auto-Burn: 1% burned on every transaction",
    "Limited Supply: Only 1,000,000 FBM minted",
    "Community Driven: Rapid growth with active holders"
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-purple-900 via-slate-900 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent" />
        <div className="container mx-auto text-center px-4 relative z-10">
          <Image src="/flashboom.png" alt="FBM Logo" width={200} height={200} className="mx-auto mb-8"/>
          <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 animate-pulse">
            Explode Your Gains With FlashBoom (FBM)!
          </h1>
          <p className="text-2xl mb-8 text-blue-300">
            A deflationary BSC token that's burning 1% every transaction — fueling its unstoppable momentum
          </p>
          
          {/* Key Features */}
          <div className="mb-8">
            <ul className="space-y-2">
              {keyFeatures.map((feature, index) => (
                <li key={index} className="text-lg text-blue-200">
                  {feature}
                </li>
              ))}
            </ul>
          
      {/* Share buttons */}
      <section className="py-10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xl text-blue-300 mb-4">Share FBM with your friends:</p>
          <div className="flex justify-center space-x-4">
            <Button
              onClick={() => {
                const text = "Check out FlashBoom Token (FBM) - The next explosive BSC gem! 🚀";
                const url = window.location.href;
                window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
              }}
              variant="outline"
              className="border-blue-500 text-blue-400 hover:bg-blue-500/10"
            >
              Share on Twitter
              <Twitter className="ml-2 h-4 w-4" />
            </Button>
            <Button
              onClick={() => {
                const url = window.location.href;
                navigator.clipboard.writeText(url);
              }}
              variant="outline"
              className="border-blue-500 text-blue-400 hover:bg-blue-500/10"
            >
              Copy Link
              <Copy className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* FOMO Banner */}
      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-center text-white z-50">
        <p className="text-lg">
          Early adopters see the biggest gains! Don&apos;t miss out - 
          <Button 
            onClick={() => window.open(PANCAKESWAP_URL, "_blank")}
            variant="link" 
            className="text-white font-bold underline ml-2"
          >
            Buy FBM Now!
          </Button>
        </p>
      </div>
    </div>
  );

export default FlashBoomToken;
          
          <p className="text-xl mb-8 text-purple-300">
            Join {holders}+ holders riding FBM to the moon! 🚀
          </p>
          
          <div className="flex justify-center space-x-4">
            <Button 
              onClick={() => window.open(PANCAKESWAP_URL, "_blank")}
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold px-8 py-4 text-lg shadow-lg shadow-blue-500/50"
            >
              Buy FBM Now
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              onClick={() => window.open(TWITTER_URL, "_blank")}
              variant="outline"
              className="border-blue-500 text-blue-400 hover:bg-blue-500/10"
            >
              Join Our Community
              <Twitter className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Deflationary Tokenomics: Skyrocket Your Gains
          </h2>
          <p className="text-center text-blue-300 mb-12 max-w-2xl mx-auto">
            Each transaction burns 1% of FBM, creating constant upward pressure on price.
            We've minted only 1,000,000 FBM tokens to ensure scarcity.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-6 rounded-lg text-center border border-blue-500/20 shadow-lg shadow-blue-500/5">
              <h3 className="text-xl font-bold mb-4 text-blue-300">Total Supply</h3>
              <p className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                1,000,000 FBM
              </p>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg text-center border border-blue-500/20 shadow-lg shadow-blue-500/5">
              <h3 className="text-xl font-bold mb-4 text-blue-300">Auto-Burn Rate</h3>
              <p className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                1% Per Transaction
              </p>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg text-center border border-blue-500/20 shadow-lg shadow-blue-500/5">
              <h3 className="text-xl font-bold mb-4 text-blue-300">Tokens Burned</h3>
              <p className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 animate-pulse">
                {tokensBurned.toLocaleString()} FBM
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Roadmap to the Moon
          </h2>
          <p className="text-center text-blue-300 mb-12 max-w-2xl mx-auto">
            Each phase is designed to amplify FBM's presence and price growth. Join us in this explosive journey!
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="bg-slate-800/50 p-6 rounded-lg border border-blue-500/20 shadow-lg shadow-blue-500/5">
                <h3 className="text-xl font-bold mb-4 text-blue-300">{step.title}</h3>
                <ul className="space-y-2">
                  {step.items.map((item, i) => (
                    <li key={i} className="flex items-center">
                      <div className={`w-2 h-2 rounded-full mr-2 ${
                        step.status === 'completed' ? 'bg-blue-500' :
                        step.status === 'ongoing' ? 'bg-purple-500' : 'bg-slate-500'
                      }`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Buy Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            How to Buy FBM
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-slate-800 p-6 rounded-lg mb-6 border border-blue-500/20 shadow-lg shadow-blue-500/5">
              <ol className="space-y-4 mb-6">
                <li className="flex items-center text-blue-300">
                  1. Connect your BSC wallet (e.g., MetaMask)
                </li>
                <li className="flex items-center text-blue-300">
                  2. Make sure you have BNB in your wallet
                </li>
                <li className="flex items-center text-blue-300">
                  3. Go to PancakeSwap, swap BNB → FBM
                </li>
              </ol>
              
              <div className="flex justify-between items-center mb-4">
                <p className="text-blue-300">Contract Address:</p>
                <a 
                  href={BSCSCAN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300"
                >
                  View on BscScan
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
              <div className="flex items-center justify-between bg-slate-900 p-3 rounded">
                <code className="text-purple-400 text-sm break-all">{contractAddress}</code>
                <Button variant="ghost" size="sm" onClick={copyAddress} className="text-blue-400 hover:text-blue-300 ml-2">
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div className="text-center">
              <Button 
                onClick={() => window.open(PANCAKESWAP_URL, "_blank")}
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
              >
                Click here to buy FBM
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Join Our Explosive Community
          </h2>
          <p className="text-xl text-blue-300 mb-8">Never miss a pump! Follow us and spread the word</p>
          <div className="flex justify-center space-x-6">
            <a 
              href={TWITTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 p-3 rounded-full hover:bg-blue-500/10 transition-colors"
              title="Follow on Twitter"
            >
              <Twitter className="h-8 w-8" />
            </a>

            <a 
              href={BSCSCAN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 p-3 rounded-full hover:bg-blue-500/10 transition-colors"
              title="Track on BscScan"
            >
              <ExternalLink className="h-8 w-8" />
            </a>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-10 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <Alert className="max-w-3xl mx-auto bg-slate-800 border-blue-500/20">
            <AlertDescription className="text-blue-100">
              Cryptocurrencies are highly volatile investments. Always do your own research (DYOR) 
              before investing. This is not financial advice.
            </AlertDescription>
          </Alert>
        </div>
      </section>
    </div>
  )
};