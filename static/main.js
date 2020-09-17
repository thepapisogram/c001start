// Check if username already exists
// If not show username form
let user_name = localStorage.getItem('username');
if(user_name == '' || user_name == null){
  document.getElementById('overlay').style.display = 'flex';
}


// Set User Profile or Avatar
let user_avatar = 'static/profiles/3.jpg';


// Store Username on Form Submit
document.getElementById('user_continue').addEventListener('click', () => {
  // Get Input Value ( Username )
  let new_name = document.getElementById('user_name').value;
  
  // Show error if username is empty or less than 5 characters
  if(new_name == '' || new_name == null){
    document.getElementById('user_error_two').style.display = 'none';
    document.getElementById('user_error').style.display = 'block';
  } 
  else if(new_name.length < 5){
    document.getElementById('user_error').style.display = 'none';
    document.getElementById('user_error_two').style.display = 'block';
  }
  // Save username
  else{
      user_name = new_name.toLowerCase();
      localStorage.setItem('username', user_name);
      document.getElementById('overlay').style.display = 'none';
  }
} );


// Themes ( Light & Dark )
const darkTheme = () => {
  let main = '#222';
  let side = '#ffc107';
  let cm_col = 'rgba(255, 255, 255, 0.7)';
  let next_class = 'btn btn-sm btn-sm btn-warning mr-2';
  let prev_class = 'btn btn-sm btn-sm btn-outline-warning mr-2';
  let add_class = 'btn btn-dark text-warning rounded-right';
  let comment_names = document.getElementsByClassName('comment-name');
  let comment_comments = document.getElementsByClassName('comment-body');
  let comment_avatars = document.getElementsByClassName('comment-avatar');
  for(cmn of comment_names){
    cmn.style.color = side;
  }
  for(cmc of comment_comments){
    cmc.style.color = cm_col;
  }
  for(cm of comment_avatars){
    cm.style.borderColor = main;
  }
  document.getElementById('go_dark').style.display = 'none';
  document.getElementById('go_light').style.display = 'inline';
  document.body.style.background = main;
  document.getElementById('inner_container').style.background = main;
  document.getElementById('caption_inner_container').style.borderColor = side;
  document.getElementById('comment_title').style.color = side;
  document.getElementById('comment_subtitle').style.color = side;
  document.getElementById('caption_title').style.color = side;
  document.getElementById('caption').style.color = 'white';
  document.getElementById('next').setAttribute('class', next_class);
  document.getElementById('prev').setAttribute('class', prev_class);
  document.getElementById('make_comment').setAttribute('class', add_class);
  theme_set = 'dark';
  localStorage.setItem('theme', 'dark');
}

const lightTheme = () => {
  let main = 'white';
  let side = '#007bff';
  let cm_col = 'black';
  let next_class = 'btn btn-sm btn-primary mr-2';
  let prev_class = 'btn btn-sm btn-outline-primary mr-2';
  let add_class = 'btn btn-primary rounded-right';
  let comment_names = document.getElementsByClassName('comment-name');
  let comment_comments = document.getElementsByClassName('comment-body');
  let comment_avatars = document.getElementsByClassName('comment-avatar');
  for(cmn of comment_names){
    cmn.style.color = cm_col;
  }
  for(cmc of comment_comments){
    cmc.style.color = cm_col;
  }
  for(cm of comment_avatars){
    cm.style.borderColor = side;
  }
  document.getElementById('go_light').style.display = 'none';
  document.getElementById('go_dark').style.display = 'inline';
  document.body.style.background = main;
  document.getElementById('inner_container').style.background = main;
  document.getElementById('caption_inner_container').style.borderColor = side;
  document.getElementById('comment_title').style.color = side;
  document.getElementById('comment_subtitle').style.color = side;
  document.getElementById('caption_title').style.color = side;
  document.getElementById('caption').style.color = 'black';
  document.getElementById('next').setAttribute('class', next_class);
  document.getElementById('prev').setAttribute('class', prev_class);
  document.getElementById('make_comment').setAttribute('class', add_class);
  theme_set = 'light';
  localStorage.setItem('theme', 'light');
}

// Load Theme
const loadTheme = () => {
  let theme_set = localStorage.getItem('theme');
  if(theme_set == 'dark') darkTheme();
  else lightTheme();
}
loadTheme();

// Switch Themes on Button Click
document.getElementById('go_dark').addEventListener('click', darkTheme );
document.getElementById('go_light').addEventListener('click', lightTheme );


// This variable will keep track of the gallery item we are currently viewing
// Its initially set to 0 to show the first gallery item
let cursor = 0;

// populate this array with 10 images
const galleryItems = [
  {
    src: "images/1.jpg",
    comments: [
      {
        profile: 'static/profiles/1.jpg',
        user: "thepapisogram",
        comment: "Bodiam is often portrayed as 'the perfect English castle'",
      }
    ],
    caption: "Bodiam Castle is a 14th-century moated castle near Robertsbridge in East Sussex, England. It was built in 1385 by Sir Edward Dalyngrigge, a former knight of Edward III, with the permission of Richard II, ostensibly to defend the area against French invasion during the Hundred Years' War.",
  },
  {
    src: "images/2.jpg",
    comments: [
      {
        profile: 'static/profiles/1.jpg',
        user: "thepapisogram",
        comment: "Africa is the best!!",
      }
    ],
    caption: "Welcome to Africa. This is a beautiful sunset with lovely clouds, giraffes, birds, an outstanding tree and a rhino. Stay Positive and Relax #cool",
  },
  {
    src: "images/3.jpg",
    comments: [
      {
        profile: 'static/profiles/1.jpg',
        user: "thepapisogram",
        comment: "Yeah, No cost for buying medicine and stuff",
      }
    ],
    caption: "These are leaves. But not just ordinary leaves, when grinded and placed in warm water with a pinch of salt, these plants can relieve you of a fever instantly",
  },
  {
    src: "images/4.jpg",
    comments: [
      {
        profile: 'static/profiles/1.jpg',
        user: "thepapisogram",
        comment: "It will cost 2,400 and 3,000 Ghana Cedis approximately",
      }
    ],
    caption: "The Sony Playstation 5 is scheduled to launch on November 12, 2020 in North America, Oceania, Japan, and South Korea, and on November 19, 2020 for most other regions with 825GB of storage space",
  },
  {
    src: "images/5.jpg",
    comments: [
      {
        profile: 'static/profiles/1.jpg',
        user: "thepapisogram",
        comment: "That's the King of the Jungle",
      }
    ],
    caption: "The lion is a species in the family Felidae and a member of the genus Panthera. It has a muscular, deep-chested body, short, rounded head, round ears, and a hairy tuft at the end of its tail. It is sexually dimorphic; adult male lions have a prominent mane.",
  },
  {
    src: "images/6.jpg",
    comments: [
      {
        profile: 'static/profiles/1.jpg',
        user: "thepapisogram",
        comment: "Did you know that cows kill more people than sharks?",
      }
    ],
    caption: "Nature, in the broadest sense, is the natural, physical, or material world or universe. 'Nature' can refer to the phenomena of the physical world, and also to life in general. The study of nature is a large, if not the only, part of science.",
  },
  {
    src: "images/7.jpg",
    comments: [
      {
        profile: 'static/profiles/1.jpg',
        user: "thepapisogram",
        comment: "Space is completely Silent??",
      }
    ],
    caption: "Space is the boundless three-dimensional extent in which objects and events have relative position and direction. Physical space is often conceived in three linear dimensions, although modern physicists usually consider it, with time, to be part of a boundless four-dimensional continuum known as spacetime.",
  },
  {
    src: "images/8.jpg",
    comments: [
      {
        profile: 'static/profiles/1.jpg',
        user: "thepapisogram",
        comment: "Thanks, I now have amazing wallpapers",
      }
    ],
    caption: "Did you know that on Windows 10 you can get daily wallpapers for your desktop from bing by downloading the Microsoft Bing Wallpaper app for free?  Click <a href='https://www.microsoft.com/en-us/p/bing-wallpaper-download/9n8413z3mtsn' target='_blank'>here</a> to download",
  },
  {
    src: "images/9.jpg",
    comments: [
      {
        profile: 'static/profiles/1.jpg',
        user: "thepapisogram",
        comment: "Highly Captivating",
      }
    ],
    caption: "The Piano was invented in Italy in 1709 by harpsichord maker Bartolomeo di Francesco Cristofori. The word piano is the shortened version of the word pianoforte, which means soft (piano) and loud (forte). The first pianos were too expensive for even the very wealthy to own",
  },
  {
    src: "images/10.png",
    comments: [
      {
        profile: 'static/profiles/1.jpg',
        user: "thepapisogram",
        comment: "Awesome Pic",
      }
    ],
    caption: "Did you know that you could get access to Microsoft's Default Wallpapers on your Windows 10 Computer? They're located at C:\\Windows\\Web",
  },
];


// I created this promise so I could run things sequentially
// Or Immediately after one another
const myPromise = (process) => {
    return new Promise( (resolve, reject) => {
        let err = false;
        if(!err) resolve();
        else reject(`Unable to ${process}`);
    } )
}


// Current Image, Caption and Comments ELements
let image = document.getElementById('image');
let caption = document.getElementById('caption');
let all_comments = document.getElementById('comments');


// Update Elements on Next/Prev Click according to cursor
const update = (index) => {
  myPromise(`Show ${index} item from array - (galleryItems) `)
  .then( () => {

    // Update Image
    let image_showing = galleryItems[index].src;
    image.src = image_showing;

    // Update Caption
    let caption_showing = galleryItems[index].caption;
    caption.innerHTML = caption_showing;

  } )
  .then( () => {
      // Get Comments from Current Gallery Item
      let comments = galleryItems[index].comments;

      // Empty Comments Div
      all_comments.innerHTML = '';

      // Create Comment
      for(comment of comments){

        // Set Profile, Name & Comment
        let comment_profile = comment.profile;
        let comment_name = comment.user;
        let actual_comment = comment.comment;

        // Create Comment Div ( <li> )
        let comment_li = document.createElement('li');
        comment_li.setAttribute('class', 'comment');
        
        // Create Comment Avatar Container ( <div> )
        let comment_avatar_container = document.createElement('div');
        comment_avatar_container.setAttribute('class', 'comment-avatar-container');

        // Create Comment Avatar ( <img> )
        let comment_avatar = document.createElement('img');
        comment_avatar.setAttribute('src', comment_profile);
        comment_avatar.setAttribute('class', 'comment-avatar');

        // Create Comment Details Container ( <div> )
        let comment_details_container = document.createElement('div');
        comment_details_container.setAttribute('class', 'comment-details-container');
        
        // Create Comment Name ( <p> )
        let comment_name_element = document.createElement('p');
        comment_name_element.setAttribute('class', 'comment-name');
        comment_name_element.textContent = comment_name;
        
        // Create Comment Text ( <p> )
        let comment_element = document.createElement('p');
        comment_element.setAttribute('class', 'comment-body');
        comment_element.textContent = actual_comment;

        // Insert Avatar Container to Comment Element( <li> )
        comment_avatar_container.appendChild(comment_avatar);
        comment_li.appendChild(comment_avatar_container);
        
        // Insert Comment Details to Comment Element ( <li> )
        comment_details_container.appendChild(comment_name_element);
        comment_details_container.appendChild(comment_element);
        comment_li.appendChild(comment_details_container);

        // Insert Comment to HTML
        all_comments.appendChild(comment_li);
      }
  } )
  // Rerun Theme to add styles
  .then( loadTheme )
  .catch( (err) => console.log(err) )
}


// Add Comment Function
const addComment = (comment) => {
  // Save Comment till Refresh
  let new_item = {
    profile: user_avatar,
    user: user_name,
    comment
  };
  galleryItems[cursor].comments.push(new_item);

  // Create Comment Div ( <li> )
  let comment_li = document.createElement('li');
  comment_li.setAttribute('class', 'comment');
  
  // Create Comment Avatar Container ( <div> )
  let comment_avatar_container = document.createElement('div');
  comment_avatar_container.setAttribute('class', 'comment-avatar-container');

  // Create Comment Avatar ( <img> )
  let comment_avatar = document.createElement('img');
  comment_avatar.setAttribute('src', user_avatar);
  comment_avatar.setAttribute('class', 'comment-avatar');

  // Create Comment Details Container ( <div> )
  let comment_details_container = document.createElement('div');
  comment_details_container.setAttribute('class', 'comment-details-container');
  
  // Create Comment Name ( <p> )
  let comment_name_element = document.createElement('p');
  comment_name_element.setAttribute('class', 'comment-name');
  comment_name_element.textContent = user_name;
  
  // Create Comment Text ( <p> )
  let comment_element = document.createElement('p');
  comment_element.setAttribute('class', 'comment-body');
  comment_element.textContent = comment;

  // Insert Avatar Container to Comment Element( <li> )
  comment_avatar_container.appendChild(comment_avatar);
  comment_li.appendChild(comment_avatar_container);
  
  // Insert Comment Details to Comment Element ( <li> )
  comment_details_container.appendChild(comment_name_element);
  comment_details_container.appendChild(comment_element);
  comment_li.appendChild(comment_details_container);

  // Insert Comment to HTML
  all_comments.appendChild(comment_li);

  // Rerun Theme
  loadTheme();
}


// Adding A New User Comment
document.getElementById('make_comment').addEventListener('click', () => {
  // Get Input Value ( comment )
  let new_comment = document.getElementById('comment').value;
  
  // If comment is not empty, add comment. else do nothing
  if(new_comment != ''){
    addComment(new_comment);
    document.getElementById('comment').value = '';
  }
});


// Add comment when typing and enter is pressed
document.getElementById('comment').addEventListener('keyup', e => {
  if(e.keyCode === 13 || e.key == 'Enter'){
    
    // Get Input Value ( comment )
    let new_comment = document.getElementById('comment').value;
    
    // If comment is not empty, add comment. else do nothing
    if(new_comment != ''){
      addComment(new_comment);
      document.getElementById('comment').value = '';
    }

  } 
});


// When next button is Clicked
document.getElementById('next').addEventListener('click', () => {
  // If on last gallery item, go to first item in gallery
  if(cursor == galleryItems.length - 1){
    cursor = 0;
  }
  // Else go to next gallery item ( cursor + 1)
  else{
    cursor++;
  }

  // Update Elements
  update(cursor);
});


// When previous button is clicked
document.getElementById('prev').addEventListener('click', () => {
  // If on first gallery item, go to last item in gallery
  if(cursor == 0){
    cursor = galleryItems.length - 1;
  }
  // Else go to previous gallery item ( cursor - 1)
  else{
    cursor--;
  }

  // Update Elements
  update(cursor);
});

// Start Gallery. With first gallery item
update(cursor);


// put in your logic here
/*
Please find comments before blocks of code to understand the logic within my code
*/
// This video might be of help: https://youtu.be/-NLu31FGz7s