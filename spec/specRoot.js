const requireAll = (requireContext) => {
  requireContext.keys().map(requireContext);
};
 
requireAll(require.context('.', true, /\.js/));
