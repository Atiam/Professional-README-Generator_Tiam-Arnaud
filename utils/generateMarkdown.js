// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'None'){
    return ''
  }
  else {
    return '![Static Badge](https://img.shields.io/badge/:badgeContent)'
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'None'){
    return ''
  }
  else {
    return '- [License](#license)'
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === 'None'){
    return ''
  }else {
    return `## License

    The application is cover under ${license} license.`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown({title, description, tableOfContents, installation, usage, license, contributing, tests, questions, email}) {
  return `# ${title} ${renderLicenseBadge(license)}

  ## Description

  ${description}

  ## table Of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#Questions)

${renderLicenseLink(license)}

  ## Installation

  ${installation}

  ## Usage

  ${usage}

 ${renderLicenseSection(license)}

  ## Contributing

  ${contributing}

  ## Tests

  ${tests}

  ## Questions
  For any additonal question please reachout to ${questions} on ${email}.
  `;

}

module.exports = generateMarkdown;
