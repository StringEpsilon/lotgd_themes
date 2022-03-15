# Legend of the green Dragon Templates

## License

Because these templates are all developed for, and based on templates from, LotgD version 0.9.7, they all fall under the GPLv2.

## Why?

Some LotgD servers are still around and I thought it's a shame the markup is so old. I like the general styles though. Yar2 has always been my favorite template and it's somewhat magical that is somewhat works on mobile too, if you wriggle it a bit.

## Yar3

Is an iteration on the classi yar2 template. I made the char info it's own column in the layout and fixed some paddings and margins - but otherwise it should look pretty much exactly as before.

It is of course all modern markup. Flexboxes have replaced the tables and I tried to use more semantic elements to make it easier for screenreaders. There's also just *less* markup in general, saving about a kilobyte per page rendered.

By default, the mobile.css is also included, which makes some tweaks on small screen sizes (<=480px) to make the game *somewhat* playable on mobile. The navigation menu can be swiped in from the left and the character info can be swiped in from the right.

Some screenshots how it looks on mobile:

* [Login](screenshot/yar3/yar3.png)
* [Login with open navigation](screenshot/yar3/login_navbar.png)
* [Login with the sidebar open](screenshot/yar3/login_sidebar.png)
* [Village with the sidebar open](screenshot/yar3/village_sidebar.png)

## Ion

When I was finished with modernizing Yar2, I had the urge to try my own design, wanting to make something minimalist and a bit more... dark mode.

## Jade

**Note:** Jade.htm has been first developed for 0.9.7. too. I know it's the iconic 1.x default skin, but I did my homework the version I have modified is directly derived from that 0.9.7. release.
You can find proof of a 0.9.7. release on the [wayback machine here](https://web.archive.org/web/20040611070409/http://hfs.cjb.net/games/LoGD/)

This is pretty much jade as-is, but I also added modern markup. And very notably: I removed the table layout and replaced the custom border frames with a `border-image` and a tilemap.

I did not attempt to make this mobile friendly. That would require a bigger overhaul.