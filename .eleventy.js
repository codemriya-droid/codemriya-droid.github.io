// .eleventy.js
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");

  // Add date filter
  eleventyConfig.addFilter("date", function(dateObj, format) {
    if (!dateObj) return "";
    
    const date = new Date(dateObj);
    
    // Simple format mapping
    const formatMap = {
      'Y-m-d': () => date.toISOString().split('T')[0],
      'F d, Y': () => date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      }),
      'Y': () => date.getFullYear().toString()
    };
    
    return formatMap[format] ? formatMap[format]() : date.toLocaleDateString();
  });

  // Create posts collection
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("posts/*.md");
  });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    }
  };
};
