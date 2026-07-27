import React from "react";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div className="relative bg-slate-950 text-white overflow-hidden border-b border-slate-800">
      {/* Background Glow Elements for Visual Depth */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 lg:px-8 py-16 md:py-24 lg:py-28 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Content */}
          <div className="space-y-6 text-center lg:text-left">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 bg-slate-900 border border-slate-800 px-3.5 py-1.5 rounded-full shadow-inner">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold">
                Engineered for Performance
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              Power Your Ride With <span className="text-cyan-400">Elite Auto Parts</span>
            </h1>

            {/* Description */}
            <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 font-normal">
              Upgrade, repair, and maintain your vehicle with industry-leading components from Star Technologies. Built for durability, precision, and peak performance.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                to="/parts"
                className="btn bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-6 py-3 border-none shadow-lg transition-transform hover:scale-105"
              >
                Explore Auto Parts
              </Link>
              <Link
                to="/categories"
                className="btn btn-outline border-slate-700 text-white hover:bg-slate-800 hover:border-cyan-400 px-6 py-3 transition-colors"
              >
                Browse Categories
              </Link>
            </div>

            {/* Key Statistics / Highlights */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-800/80 max-w-lg mx-auto lg:mx-0">
              <div>
                <h3 className="text-2xl font-black text-cyan-400">500+</h3>
                <p className="text-xs text-slate-400 uppercase tracking-wider mt-1">Genuine Parts</p>
              </div>
              <div>
                <h3 className="text-2xl font-black text-cyan-400">100%</h3>
                <p className="text-xs text-slate-400 uppercase tracking-wider mt-1">Quality Assured</p>
              </div>
              <div>
                <h3 className="text-2xl font-black text-cyan-400">24/7</h3>
                <p className="text-xs text-slate-400 uppercase tracking-wider mt-1">Expert Support</p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual / Graphic Placeholder */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-lg aspect-4/3 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-slate-800 shadow-2xl p-6 flex flex-col justify-between overflow-hidden group">
              
              {/* Internal decorative overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.1),transparent_50%)]"></div>
              
              <div className="flex justify-between items-start relative z-10">
                <div className="bg-slate-800/80 backdrop-blur px-3 py-1 rounded-lg text-xs font-semibold text-cyan-400 border border-slate-700">
                  Featured Collection
                </div>
                <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold text-sm">
                  ST
                </div>
              </div>

              {/* Center Graphic Graphic Placeholder (Replace with an <img> tag if you have an image) */}
              <div className="py-12 text-center relative z-10">
                <div className="inline-flex p-6 rounded-full bg-slate-900/90 border border-slate-700 shadow-inner text-cyan-400 mb-3 group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-slate-200">High-Grade Components</h4>
                <p className="text-xs text-slate-400 mt-1">Engineered for absolute reliability under heavy loads</p>
              </div>

              <div className="flex justify-between items-center text-xs text-slate-400 border-t border-slate-800/80 pt-4 relative z-10">
                <span>Star Technologies Direct</span>
                <span className="text-cyan-400 font-semibold">Shop Now &rarr;</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Banner;