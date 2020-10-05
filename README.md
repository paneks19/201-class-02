# LAB - 201-02 and 201-03

## About Me with a Guessing Game

This app prompts a user for their name and then asks them to play a guessing game regarding random facts about the page author. The user is alerted to the correct answer after each question. Upon completion of the guessing game, the user is thanked for playing and the page is displayed with some biographical info about the author.

9/30 Update: Page now includes 2 additional guessing games a number guessing game using a loop and if statements. The second game asks the user to guess country names from a range of 10 possible correct answers. This was accomplished using nested loops and if statements.

## Hosting

10/4 update: Website deployed to AWS S3 Bucket with Public Access

[Deployed S3 Bucket](http://cf-201-lab-05b.s3-website-us-west-2.amazonaws.com/)

### Author: Simon Panek

### Paired Programming

Mariko was driver, Simon was navigator.

### Links and Resources

- Found CSS font styles at w3schools.com
- Found out how to create a sticky header using the `position: fixed;` via W3schools.com
- Figured out how to use `parseInt();` to force users input to be a number via W3school.com

### Reflections and Comments

- Figured out how proper padding and margin can make a big difference in page appearance
- Learned that reset.css can in fact override some styles indicated in app.js if they are overly broad. For instance, in this case attempting to us a `*{ border: solid black 1px}` did not work for all elements because the reset had more specifically defined borders for a few elements.
