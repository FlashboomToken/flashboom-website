"use client";

import React, { useState, useEffect } from 'react';
import { Rocket, Flame, Copy, ExternalLink, Twitter, MessageCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";

const FlashBoomToken = () => {
  const [burnedTokens, setBurnedTokens] = useState(2451);
  const contractAddress = "0xF6921B5BdAb9480E35eb8915b53Ec38581E4f004";
  
  const PANCAKESWAP_URL = "https://pancakeswap.finance/?chain=bsc&outputCurrency=0xF6921B5BdAb9480E35eb8915b53Ec38581E4f004";
  const TWITTER_URL = "https://x.com/FlashBoomToken";
  const BSCSCAN_URL = "https://bscscan.com/token/0xf6921b5bdab9480e35eb8915b53ec38581e4f004";

  const copyAddress = () => {
    navigator.clipboard.writeText(contractAddress);
  };

  const roadmapSteps = [
    {
      title: "Phase 1 - Launch 🚀",
      items: ["BscScan Verification", "Community Airdrop", "PancakeSwap Listing"],
      status: "completed"
    },
    {
      title: "Phase 2 - Expansion 💫",
      items: ["Additional Platform Listings", "Influencer Marketing", "Community Growth"],
      status: "ongoing"
    },
    {
      title: "Phase 3 - Development 🌟",
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
      {/* Enhanced Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-purple-900 via-slate-900 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent" />
        <div className="container mx-auto text-center px-4 relative">
          <img src="/api/placeholder/200/200" alt="FBM Logo" className="mx-auto mb-8 animate-pulse" />
          <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Explode Your Gains With FlashBoom! 🚀
          </h1>
          <p className="text-2xl mb-8 text-blue-300">A deflationary BSC token that's burning 1% every transaction</p>
          
          <div className="max-w-2xl mx-auto mb-8">
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {keyFeatures.map((feature, index) => (
                <li key={index} className="bg-slate-800/50 p-4 rounded-lg border border-blue-500/20">
                  <p className="text-blue-200">{feature}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold shadow-lg shadow-blue-500/50 w-full sm:w-auto"
              onClick={() => window.open(PANCAKESWAP_URL, "_blank")}
            >
              Buy FBM Now!
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              size="lg"
              variant="outline" 
              className="border-blue-500 text-blue-400 hover:text-blue-300 w-full sm:w-auto"
              onClick={() => window.open(TWITTER_URL, "_blank")}
            >
              Join Our Community
              <Twitter className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced Tokenomics Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Deflationary Tokenomics: Skyrocket Your Gains
          </h2>
          <p className="text-center text-blue-300 mb-12 max-w-2xl mx-auto">
            Each transaction burns 1% of FBM, creating constant upward pressure on price.
            Join 1000+ holders riding FBM to the moon!
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
            <div className="bg-slate-800 p-6 rounded-lg text-center border border-blue-500/20 shadow-lg shadow-blue-500/5 animate-pulse">
              <h3 className="text-xl font-bold mb-4 text-blue-300">Tokens Burned</h3>
              <div className="flex items-center justify-center">
                <Flame className="text-purple-500 mr-2" />
                <p className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                  {burnedTokens.toLocaleString()} FBM
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Roadmap Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Roadmap to the Moon
          </h2>
          <p className="text-center text-blue-300 mb-12 max-w-2xl mx-auto">
            Each phase is designed to amplify FBM's presence and price growth.
            Join us in this explosive journey!
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {roadmapSteps.map((step, index) => (
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

      {/* Enhanced How to Buy Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            How to Buy FBM
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-slate-800 p-6 rounded-lg mb-6 border border-blue-500/20 shadow-lg shadow-blue-500/5">
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
                <Button variant="ghost" size="sm" onClick={copyAddress} className="text-blue-400 hover:text-blue-300 ml-2 shrink-0">
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start bg-slate-800/30 p-4 rounded-lg">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-2 mr-4">1</div>
                <div>
                  <p className="text-blue-100">Connect your BSC wallet (e.g., MetaMask)</p>
                  <p className="text-sm text-blue-400 mt-1">Verify the contract on BscScan first!</p>
                </div>
              </div>
              
              <div className="flex items-start bg-slate-800/30 p-4 rounded-lg">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-2 mr-4">2</div>
                <div>
                  <p className="text-blue-100">Make sure you have BNB in your wallet</p>
                  <p className="text-sm text-blue-400 mt-1">You'll need BNB for the swap and gas fees</p>
                </div>
              </div>
              
              <div className="flex items-start bg-slate-800/30 p-4 rounded-lg">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-2 mr-4">3</div>
                <div>
                  <p className="text-blue-100">
                    <Button 
                      variant="link"
                      className="text-blue-400 hover:text-blue-300 p-0"
                      onClick={() => window.open(PANCAKESWAP_URL, "_blank")}
                    >
                      Click here to buy FBM on PancakeSwap →
                    </Button>
                  </p>
                  <p className="text-sm text-blue-400 mt-1">Swap your BNB for FBM and join the moon mission!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Community Section */}
      <section className="py-10">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-6 text-blue-300">Join our explosive community!</h3>
          <div className="flex justify-center space-x-6">
            <Button
              variant="ghost"
              className="text-blue-400 hover:text-blue-300 hover:bg-blue-500/10"
              onClick={() => window.open(TWITTER_URL, "_blank")}
            >
              <Twitter className="h-6 w-6 mr-2" />
              Follow Us
            </Button>
            <Button
              variant="ghost"
              className="text-blue-400 hover:text-blue-300 hover:bg-blue-500/10"
              onClick={() => window.open(BSCSCAN_URL, "_blank")}
            >
              <ExternalLink className="h-6 w-6 mr-2" />
              Track FBM
            </Button>
          </div>
          <p className="text-blue-300 mt-4">Share with friends and never miss a pump! 🚀</p>
        </div>
      </section>

      {/* Enhanced Disclaimer Section */}
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
  );
};

export default FlashBoomToken;