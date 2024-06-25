# WoMenu: A Curated Menu for your Period

## Initial Design
This project was brought to life during USC's AthenaHacks, where my team and I realized we wanted to improve the dining experience at USC. The USC Dining Menu was posted and updated online, and while often incredibly informative (includes all ingredients available at the salad bar or custom dish areas), was difficult to navigate. Having recently experienced a rough period season, we decided to work on WoMenu to help sift through the wordy online menu and provide students with sample meal plans that they could follow (or have friends/boyfriends help purchase) to ease period cramps!

## Front End
Using **HTML**, **CSS**, **Javascript**, and **React**, I made a simple front end design based off of the Figma design my teammates made!


## Back End
### Filtering and Tagging
First, we wanted to add a feature to allow users to filter through common allergens and "vitamins" so they could have more control over what they eat. For example, avoiding red meat, nuts, or salt. This is done by scraping menu information from the USC dining hall website using the Python library **Beautiful Soup** and storing the information in **Google Firebase** so it would include daily updates. 

### Meal Plan Creation
It isn't straightforward making yummy meals from a list of ingredients, so we decided to feed the information into **Google Gemini** to create a set of custom meal plans that the user could follow. 

## Currently Not Really Functioning on Github...
So, I'm still working on making it so that the front end and back end work together? Currently, they work separately and locally, and I still need to work on how to secure information. Currently a work in progress!

# Goals
- Make an actual functioning webpage/webapp
- Expand to more than just the USC Dining Website

