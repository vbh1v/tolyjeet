"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

const WebsiteLinks = () => {
  const twitter = "https://twitter.com/mewsworld";
  const telegram = "https://t.me/mewsworld";
  const dexScreener =
    "https://dexscreener.com/solana/872kbnidUoPHRRY9z714rFf5Jxfw7K8VKDSEHcwCafL9";
  const solscan =
    "https://solscan.io/token/872kbnidUoPHRRY9z714rFf5Jxfw7K8VKDSEHcwCafL9";

  return (
    <div className="block2__links">
      <a href={twitter} target="_blank" className="link">
        <img src="/assets/images/twitter.png" alt="" />
      </a>
      <a href={telegram} target="_blank" className="link">
        <img src="/assets/images/Tg.svg" alt="" />
      </a>
      <a href={dexScreener} target="_blank" className="link">
        <img src="/assets/images/1.svg" alt="" />
      </a>
      <a href={solscan} target="_blank" className="link">
        <img src="/assets/images/solscan.png" alt="" />
      </a>
      {/* <a href="https://phantom.app/" target="_blank" className="link">
        <img src="/assets/images/phantom.png" alt="" />
      </a> */}
      {/* <a
        href="https://www.coingecko.com/en/coins/mew"
        target="_blank"
        className="link"
      >
        <img src="/assets/images/Mask_group.svg" alt="" />
      </a> */}
      {/* <a
        href="https://coinmarketcap.com/currencies/mew"
        target="_blank"
        className="link"
      >
        <img src="/assets/images/Subtract.png" alt="" />
      </a> */}
      {/* <a
        href="https://www.dextools.io/app/en/solana/pair-explorer/MEW1gQWJ3nEXg2qgERiKu7FAFj79PHvQVREQUzScPP5"
        target="_blank"
        className="link"
      >
        <img src="/assets/images/2.png" alt="" />
      </a> */}
      {/* <a
        href="https://www.okx.com/web3/dex-swap"
        target="_blank"
        className="link"
      >
        <img src="/assets/images/okx_dex_logo_white.svg" alt="" />
      </a> */}
    </div>
  );
};

export default WebsiteLinks;
