const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const product_controller = require('../controller/controller');

router.get('/song/open/songsearch/:id', product_controller.job_search);

router.put('/user/open/:id/update', product_controller.job_update);

router.delete('/user/open/:id/delete', product_controller.job_delete);

// //user
// const jwtHelper = require('../config/jwtHelper');

// router.post('/user/secure/register', product_controller.register);
// router.post('/user/secure/resend', product_controller.resend);
// router.post('/user/secure/authenticate', product_controller.authenticate);
// router.get('/user/open/userProfile',jwtHelper.verifyJwtToken, product_controller.userProfile);
// router.get('/user/open/activate/:token', product_controller.activateUser);

// router.post('/user/secure/googlelogin', product_controller.google_login);
// router.post('/user/secure/adminlogin', product_controller.admin_login);

// //song part
// router.post('/song/secure/songcreate', song_controller.song_create);

// router.get('/song/open/songsort', song_controller.song_top10);

// //review part
// router.post('/review/secure/reviewcreate', review_controller.review_create);
// //router.get('/review/open/reviewread', review_controller.review_read);
// router.get('/review/open/reviewsearch/:id', review_controller.review_search);
// router.get('/review/open/mostrecent/:songname', review_controller.review_mostrecent);

// //playlist part
// router.post('/playlist/secure/playlistcreate', playlist_controller.playlist_create);
// router.get('/playlist/open/playlistread/:id', playlist_controller.playlist_search);
// router.get('/playlist/open/allplaylist/:id', playlist_controller.playlist_all);
// router.post('/playlist/secure/playlistupdate', playlist_controller.playlist_update);
// router.post('/playlist/secure/settype', playlist_controller.setType);
// router.post('/playlist/secure/playlistedit', playlist_controller.EditPlaylist);
// //router.put('/:playlistN/playlistupdate', playlist_controller.playlist_update);

// //admin
// router.post('/admin/secure/settype', admin_controller.setType);
// router.post('/admin/secure/setsong', admin_controller.setSong);
// router.get('/admin/secure/getsongs', admin_controller.getSongs);
// router.get('/admin/secure/getusers', admin_controller.getUsers);
// router.post('/admin/secure/setstatus', admin_controller.setStatus);


module.exports = router;
