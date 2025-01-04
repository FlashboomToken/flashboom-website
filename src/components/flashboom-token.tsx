"use client";

// src/components/flashboom-token.tsx

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
      title: "Phase 1 - Lancement",
      items: ["Vérification BscScan", "Airdrop communautaire", "Listing PancakeSwap"],
      status: "completed"
    },
    {
      title: "Phase 2 - Expansion",
      items: ["Listing plateformes", "Marketing influenceurs", "Croissance communauté"],
      status: "ongoing"
    },
    {
      title: "Phase 3 - Développement",
      items: ["Partenariats stratégiques", "Audits externes", "Expansion marketing"],
      status: "upcoming"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
            {/* Hero Section avec effet néon */}
            <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-purple-900 via-slate-900 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent" />
        <div className="container mx-auto text-center px-4 relative">
          <img src="/api/placeholder/200/200" alt="FBM Logo" className="mx-auto mb-8 animate-pulse" />
          <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 animate-pulse">
            FlashBoomToken (FBM)
          </h1>
          <p className="text-2xl mb-8 text-blue-300">Explode Your Gains! 🚀</p>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold shadow-lg shadow-blue-500/50"
            onClick={() => window.open(PANCAKESWAP_URL, "_blank")}
          >
            Buy on PancakeSwap
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

  {/* Tokenomics Section */}
  <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Tokenomics
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-6 rounded-lg text-center border border-blue-500/20 shadow-lg shadow-blue-500/5">
              <h3 className="text-xl font-bold mb-4 text-blue-300">Supply Totale</h3>
              <p className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                1,000,000 FBM
              </p>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg text-center border border-blue-500/20 shadow-lg shadow-blue-500/5">
              <h3 className="text-xl font-bold mb-4 text-blue-300">Burn Automatique</h3>
              <p className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                1% / Transaction
              </p>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg text-center border border-blue-500/20 shadow-lg shadow-blue-500/5">
              <h3 className="text-xl font-bold mb-4 text-blue-300">Tokens Brûlés</h3>
              <div className="flex items-center justify-center">
                <Flame className="text-purple-500 mr-2" />
                <p className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                  {burnedTokens} FBM
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Roadmap
          </h2>
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

      {/* How to Buy Section - Mise à jour du lien BSCScan */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Comment Acheter
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-slate-800 p-6 rounded-lg mb-6 border border-blue-500/20 shadow-lg shadow-blue-500/5">
              <div className="flex justify-between items-center mb-4">
                <p className="text-blue-300">Adresse du contrat :</p>
                <a 
                  href={BSCSCAN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300"
                >
                  Voir sur BscScan
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
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-2 mr-4">1</div>
                <div>
                  <p className="text-blue-100">Connectez votre wallet compatible BSC (ex: MetaMask)</p>
                  <a 
                    href={BSCSCAN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-400 hover:text-blue-300 mt-1 inline-block"
                  >
                    Vérifier le contrat sur BscScan →
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-2 mr-4">2</div>
                <p className="text-blue-100">Assurez-vous d'avoir des BNB dans votre wallet</p>
              </div>
              <div className="flex items-start">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-2 mr-4">3</div>
                <div>
                  <p className="text-blue-100">
                    <a 
                      href={PANCAKESWAP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 underline"
                    >
                      Visitez PancakeSwap
                    </a>
                    {" "}
                    et échangez vos BNB contre FBM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Links - Mise à jour des liens */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-6">
            <a 
              href={TWITTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 p-3 rounded-full hover:bg-blue-500/10 transition-colors"
            >
              <Twitter className="h-6 w-6" />
            </a>
            <a 
              href={BSCSCAN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 p-3 rounded-full hover:bg-blue-500/10 transition-colors"
            >
              <ExternalLink className="h-6 w-6" />
            </a>
          </div>
        </div>
      </section>

      <section className="py-10 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <Alert className="max-w-3xl mx-auto bg-slate-800 border-blue-500/20">
            <AlertDescription className="text-blue-100">
              Les cryptomonnaies sont des investissements très volatils. Faites vos propres recherches (DYOR) 
              avant d'investir. Cette présentation ne constitue pas un conseil financier.
            </AlertDescription>
          </Alert>
        </div>
      </section>
    </div>
  );
};

export default FlashBoomToken;