footer#footer
  #footer-text
    - if attr? :revnumber
      |#{attr 'version-label'} #{attr :revnumber}
    - if attr? 'last-update-label'
      br
      |#{attr 'last-update-label'} #{attr :docdatetime}
  - unless (docinfo_content = (docinfo :footer)).empty?
    =docinfo_content