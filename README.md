# Event Management Photo app
 Full event photo app that allows you to query by title of the image and by month and displays the photo. If the key word is "snow" and/or "october"/"july", after querying by month or image title, the app will display images that have similar dataset with the same values.
# Event Management Photo app
 Full event photo app that allows you to query by title of the image and by month and displays the photo. If the key word is "snow" and/or "october"/"july", after querying by month or image title, the app will display images that have similar dataset with the same values.

# How to set up in running the app
## MongoDB Community & MongoDB Compass Tool
 We used MongoDB for our database and specifically MongoDB Compass for its GUI. You can download MongoDB community & Compass through these links 
https://www.mongodb.com/try/download/community https://www.mongodb.com/try/download/compass

1. After connecting to your local database set up your database called "eventdb" and its collection "photos".

2. Click "ADD DATA" and select "Insert Document" and paste the JSON values one by one contained in our json folder which is provided in the main repository. Then click "Insert". It should look something like this as one input:

![image](https://user-images.githubusercontent.com/40307623/168750087-e897d803-cf71-49ed-9bc7-a53cc4dc37bb.png)


## Running the app
1. Open your terminal, and go to the project folder directory. 

3. Run the command "nodemon" and make sure your terminal looks like this: 

![image](https://user-images.githubusercontent.com/40307623/168748323-fd55a778-cdc8-4459-96d3-9a6a2f871075.png)

3. Once the app is successfully running, open a new browser and enter "http://localhost:8000/"

## Play & Test
Now you can go ahead and play around with its functions and test incomplete words to see if any events are displayed. 