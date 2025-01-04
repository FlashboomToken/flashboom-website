// src/components/flashboom-token.tsx
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
      {/* [Sections précédentes identiques...] */}

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

      {/* [Section Disclaimer identique...] */}
    </div>
  );
};

export default FlashBoomToken;