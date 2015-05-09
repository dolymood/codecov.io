var appveyor = require("../../lib/services/appveyor");

describe("appveyor service", function(){

  it ("can detect appveyor", function(){
    process.env.APPVEYOR = "true";
    expect(appveyor.detect()).to.be(true);
  });

  it ("can get appveyor env info", function(){
    process.env.APPVEYOR_REPO_COMMIT = "5678";
    process.env.APPVEYOR_REPO_BRANCH = "master";
    process.env.APPVEYOR_BUILD_VERSION = "job";
    process.env.APPVEYOR_JOB_ID = "build";
    process.env.APPVEYOR_REPO_NAME = 'owner/repo';

    expect(appveyor.configuration()).to.eql({
      service : 'appveyor',
      commit : '5678',
      build : 'build',
      job : 'job',
      branch : 'master',
      slug : 'owner/repo'
    });
  });

});
