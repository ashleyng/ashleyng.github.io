---
layout: post
title: Opencv panoramic images
category: notable
---

Well I got back home from uni on Sunday, and I've been busy working on continuing my computer vision class projects. The one I've currently been working on is to create panoramic images.

To give some background on what was turned in for the class; our program could really only handle creating panos with three images. Here are some images generated with that code


- 3 image pano

	![Imgur](http://i.imgur.com/nngFFaAl.jpg)

- 4 image pano

	![Imgur](http://i.imgur.com/ytX0FB3l.jpg)

I don't want to go too in depth into what we did since the class might be taught again. But as you can see, the 3 image pano looks pretty good, but the 4 image pano has incorrect stitching on the far right side. But as I've said, since I got back, I've been working on updating the code so that it can handle more than 3 images. Here are some generated images from the updated code.

- 4 image pano

	![Imgur](http://i.imgur.com/UagQ61ml.png)

- 8 image pano

	![Imgur](http://i.imgur.com/lYDscjIl.jpg)

Some other things I'd like to try to do is image blending, making equirectangular panoramic images, "little planet" images, and non planar panoramic images (or mosaic images). Here are examples of equirectangular and "little planet" images if you don't know what they are (plus I didn't really want to type up a whole paragraph trying to explain what each one was).

- equiretangular projection

	![Imgur](http://i.imgur.com/zfQDT1Rm.jpg)

- little planet 

	![Imgur](http://i.imgur.com/SFpToNcm.jpg)

As for the non-planer project, you can see with the above images that I generated, the images always go from left to right and are always one image high. The non-planar code would be able to handle a mosaic where the end product is more than one image high and more than three (possibly two) images wide.

I'll give more updates as progress is made. May even go more in depth into our code if enough people ask, and if I can get permission from the professor to talk about it (I probably still won't post the code though)

Well until next time, good morning, good afternoon, good evening, and good night!

Ashley

