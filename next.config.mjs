import createMDX from '@next/mdx';

// 1. Set up MDX support
const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

let userConfig = undefined;
try {
  // Try to import ESM user config
  userConfig = await import('./v0-user-next.config.mjs');
} catch (e) {
  try {
    // Fallback to CJS import
    userConfig = await import('./v0-user-next.config.js');
  } catch (innerError) {
    // ignore error
  }
}

// 2. Base Next.js config
/** @type {import('next').NextConfig} */
const baseConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
  // ✅ pageExtensions must NOT go inside experimental!
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
};

// 3. Merge user config (if any)
if (userConfig) {
  const config = userConfig.default || userConfig;

  for (const key in config) {
    if (
      typeof baseConfig[key] === 'object' &&
      !Array.isArray(baseConfig[key]) &&
      baseConfig[key] !== null
    ) {
      baseConfig[key] = {
        ...baseConfig[key],
        ...config[key],
      };
    } else {
      baseConfig[key] = config[key];
    }
  }
}

// 4. Export the final config wrapped with MDX
export default withMDX(baseConfig);
