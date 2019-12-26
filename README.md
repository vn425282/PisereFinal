# Web Frontend

* This project using React, Redux for State Management

## Install Library

```
1. npm install
2. npm serve
```

## Uses case

- The user should be able to search by keyword for images<br />
- Images should be shown in a grid with consistent width and height images, without<br />
stretching the images (cropping is ok, so long as the image fills the grid space), with a
default maximum of 8 images shown per search<br />
- The user should be able to add and remove a tag from images to mark or unmark
them as a favourite image<br />
- Different app states should ideally be accounted for with UI feedback to the user, e.g.
errors, loading, etc<br />
The client also had a few other features in mind, but considered these as secondary and only
required if we’re able to fulfil the above requirements:<br />
- Add a “Fetch More” button displayed below the results that will fetch the next 8
image results for the current search<br />
- A dedicated page that the user can go to to view their tagged favourite images at
any time<br />


## IE11 Testing fot Layout
● Homepage
![Alt text](https://i.ibb.co/HFnLzqD/Screen-Shot-2019-12-01-at-20-13-37.png?raw=true "Title")

● Search Page 
You can see the error image while loading, not loading yet, and already loading based on Skeleton.
![Alt text](https://i.ibb.co/K0LTDxG/Screen-Shot-2019-12-01-at-20-14-02.png?raw=true "Title")

● Search Page ( mouse hover )
![Alt text](https://i.ibb.co/XJjXhtY/Screen-Shot-2019-12-01-at-20-42-09.png?raw=true "Title")

● Search Page ( clicked )
![Alt text](https://i.ibb.co/PtWHm4p/Screen-Shot-2019-12-01-at-20-15-04.png?raw=true "Title")

● Favorite Page
![Alt text](https://i.ibb.co/wKpP0d9/Screen-Shot-2019-12-01-at-20-15-31.png?raw=true "Title")

