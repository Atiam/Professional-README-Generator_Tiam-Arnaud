// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'None'){
    return ''
  }
  else {
    return `![GitHub license](https://img.shields.io/badge/license-${license.replace(/ /g, '%20')}-blue.svg)`
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
- [video](#Video)

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
  
  ## Video
  ![video](https://app.screencastify.com/v2/manage/videos/7gVGZhlorMPLgW0fT7Kj)
  [![Watch the video](https://i.stack.imgur.com/Vp2cE.png)](https://youtu.be/vt5fpE0bzSY)
  `;



}

module.exports = generateMarkdown;
