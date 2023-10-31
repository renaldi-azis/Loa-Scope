const faker = require('faker');
const uuid = require('uuid/v4');

const { Test, Video } = require('../database/models');

const generateVideoUrl = () => {
  const videoUrls = [
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4',
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4',
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4',
  ];

  const index = Math.floor(Math.random() * videoUrls.length);
  return videoUrls[index];
};

const generateTestVideos = (testId, count) => {
  const videos = [];
  for (let i = 0; i < count; i += 1) {
    videos.push({
      testId,
      videoNumber: i + 1,
      videoPath: '/',
      videoUrl: generateVideoUrl(),
      wormCount: Math.floor(Math.random() * 100),
      recordedAt: faker.date.past(),
    });
  }
  return videos;
};

const generateTest = () => {
  const test = {
    deviceId: uuid(),
    patientId: uuid(),
    testId: uuid(),
    latitude: faker.address.latitude(),
    longitude: faker.address.longitude(),
    executedAt: faker.date.past(),
    videoCount: 7,
  };
  const videos = generateTestVideos(test.testId, 7);
  test.totalWormCount = videos.reduce((sum, video) => sum + video.wormCount, 0);

  return {
    test,
    videos,
  };
};

const run = async () => {
  for (let i = 0; i < 1000; i += 1) {
    const { test, videos } = generateTest();
    await Test.create(test);
    for (let video of videos) {
      await Video.create(video);
    }
  }
};

run();
