const MobileAppTesting = require("../pageobjects/Bookmark_po");
describe("Mobile App Testing", () => {
    it("Explore_Bookmarks", async () => {
      await MobileAppTesting.Explore_Bookmarks();
    });
  
    it("Verifying_Deleting_Bookmarks", async () => {
      await MobileAppTesting.Verifying_Deleting_Bookmarks();
    });
  
    it("Video_recentLesson", async () => {
      await MobileAppTesting.Video_recentLesson();
    });
    it('Setting', async() => {
      await MobileAppTesting.Setings();
    });
    it('Arts Humanities', async() => {
      await MobileAppTesting.Arts_humanities();
    });
    it("App switch", async () => {
      await MobileAppTesting.AppSwith();
    });
    it("Closing", async () => {
      await MobileAppTesting.Closing();
    });
  });