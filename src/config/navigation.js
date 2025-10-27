// Navigation configuration for consistent UI across all pages
export const navigationConfig = {
  // Header configuration
  header: {
    showBackButton: true,
    showLogo: true,
    showPoints: false, // Remove points from nav bar
    showAvatar: true,  // Add avatar instead
    showSettings: true
  },
  
  // Bottom navigation for mobile
  bottomNav: {
    show: true,
    items: [
      { path: '/athlete-home', label: 'Home', icon: 'home' },
      { path: '/crew', label: 'Crew', icon: 'crew' },
      { path: '/matching-home', label: 'Matches', icon: 'matches' },
      { path: '/training', label: 'Training', icon: 'training' },
      { path: '/athlete-profile', label: 'Profile', icon: 'profile' }
    ]
  },
  
  // Points display configuration
  points: {
    showInProfile: true,
    showInCrewDashboard: true,
    showInNavBar: false // Moved to profile only
  }
};

// Helper function to get consistent header props
export const getHeaderProps = (showBack = true, showPoints = false) => ({
  showBackButton: showBack,
  showLogo: true,
  showPoints: showPoints,
  showAvatar: true,
  showSettings: true
});

// Helper function to get consistent bottom nav props
export const getBottomNavProps = () => ({
  show: true,
  items: navigationConfig.bottomNav.items
});
