---
# Output debugging info
# loglevel: debug

# Major version of Bootstrap: 3 or 4
bootstrapVersion: 3

# If Bootstrap version 3 is used - turn on/off custom icon font path
useCustomIconFontPath: false

# Webpack loaders, order matters
styleLoaders:
  - style
  - css
  - sass

# Extract styles to stand-alone css file
# Different settings for different environments can be used,
# It depends on value of NODE_ENV environment variable
# This param can also be set in webpack config:
#   entry: 'bootstrap-loader/extractStyles'
extractStyles: false
# env:
#   development:
#     extractStyles: false
#   production:
#     extractStyles: false


# Customize Bootstrap variables that get imported before the original Bootstrap variables.
# Thus, derived Bootstrap variables can depend on values from here.
# See the Bootstrap _variables.scss file for examples of derived Bootstrap variables.
#
# preBootstrapCustomizations: ./path/to/bootstrap/pre-customizations.scss


# This gets loaded after bootstrap/variables is loaded
# Thus, you may customize Bootstrap variables
# based on the values established in the Bootstrap _variables.scss file
#
# bootstrapCustomizations: ./path/to/bootstrap/customizations.scss


# Import your custom styles here
# Usually this endpoint-file contains list of @imports of your application styles
#
# appStyles: ./path/to/your/app/styles/endpoint.scss


### Bootstrap styles
styles:

  # Mixins
  mixins: false

  # Reset and dependencies
  normalize: false
  print: false
  glyphicons: false

  # Core CSS
  scaffolding: false
  type: false
  code: false
  grid: false
  tables: false
  forms: false
  buttons: false

  # Components
  component-animations: false
  dropdowns: false
  button-groups: false
  input-groups: false
  navs: false
  navbar: false
  breadcrumbs: false
  pagination: false
  pager: false
  labels: false
  badges: false
  jumbotron: false
  thumbnails: false
  alerts: false
  progress-bars: false
  media: false
  list-group: false
  panels: false
  wells: false
  responsive-embed: false
  close: false

  # Components w/ JavaScript
  modals: false
  tooltip: false
  popovers: false
  carousel: false

  # Utility classes
  utilities: false
  responsive-utilities: false

### Bootstrap scripts
scripts:
  transition: false
  alert: false
  button: false
  carousel: false
  collapse: false
  dropdown: false
  modal: false
  tooltip: false
  popover: false
  scrollspy: false
  tab: false
  affix: false
