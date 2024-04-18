"use client";
import React, { useState } from "react";

const TokenAddress = () => {
  const address = "872kbnidUoPHRRY9z714rFf5Jxfw7K8VKDSEHcwCafL9";
  const turncatedAddress = "872kbnid...EHcwCafL9";
  const [isCopied, setCopied] = useState(false);

  const copyText = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  //   function truncateText(text: string, maxLength: number) {
  //     if (text.length <= maxLength) {
  //       return textToCopy;
  //     }

  //     // Truncate based on characters or words (adjust as needed)
  //     const truncatedText = text.substring(0, maxLength);
  //     const lastSpaceIndex = truncatedText.lastIndexOf(" "); // Truncate on a word boundary if possible

  //     return lastSpaceIndex !== -1
  //       ? truncatedText.substring(0, lastSpaceIndex) + "..."
  //       : truncatedText + "...";
  //   }

  //   const text = truncateText(textToCopy, 20);

  return (
    <div className="flex align-self justify-center md:text-center items-center">
      <p>{turncatedAddress}</p>
      <button
        className="bg-transparent hover:bg-transparent text-white-800 font-bold py-2 px-4 rounded inline-flex items-center"
        // className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
        onClick={copyText}
      >
        {!isCopied ? (
          <svg
            className="fill-current w-4 h-4 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M20 2H10c-1.103 0-2 .897-2 2v4H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2v-4h4c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2M4 20V10h10l.002 10zm16-6h-4v-4c0-1.103-.897-2-2-2h-4V4h10z"
            />
          </svg>
        ) : (
          <svg
            className="fill-current w-4 h-4 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="#00ff55"
              d="M.41 13.41L6 19l1.41-1.42L1.83 12m20.41-6.42L11.66 16.17L7.5 12l-1.43 1.41L11.66 19l12-12M18 7l-1.41-1.42l-6.35 6.35l1.42 1.41z"
            />
          </svg>
        )}
        {/* <svg
          className="fill-current w-4 h-4 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
        </svg> */}
        {isCopied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
};

export default TokenAddress;
