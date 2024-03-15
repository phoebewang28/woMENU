import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
from bs4 import BeautifulSoup 
import requests


cred = credentials.Certificate("/Users/rando/woMENU/womenu-firebase-adminsdk.json")
firebase_admin.initialize_app(cred)
db = firestore.client()

url = 'https://hospitality.usc.edu/residential-dining-menus' 
response = requests.get(url) 

items_text = []

if response.status_code == 200:
  soup = BeautifulSoup(response.text, 'html.parser')     
  # Scraping logic here
  list_items = soup.find_all(class_='menu-item-list')
  for li in list_items:
     for item in li.find_all('li'):
      # Remove all <span> tags and their contents
      [s.extract() for s in item('span')]

      items_text.append(item.get_text().strip())
else:
  print('Failed to retrieve the webpage')

# with open('output.csv', 'w', newline ='') as file:
#   writer = csv.writer(file)

#   writer.writerow(items_text)

doc_ref = db.collection('scraped_menus').document('usc_menu')
doc_ref.set({'menu_items': items_text})
