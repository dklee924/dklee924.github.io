// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Thesis, Peer-reviewed Journals &amp; Proceedings of Conferences.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "Edit the `_data/repositories.yml` and change the `github_users` and `github_repos` lists to include your own GitHub profile and repositories.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "This is a description of the page. You can modify it in &#39;_pages/cv.md&#39;. You can also change or remove the top pdf download button.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "Courses I Taught or Codeveloped.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "dropdown-bookshelf",
              title: "bookshelf",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/books/";
              },
            },{id: "dropdown-blog",
              title: "blog",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/blog/";
              },
            },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-announcement-3",
          title: 'Announcement_3',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_3/";
            },},{id: "news-i-joined-the-structural-system-reliability-group-ssrg-at-snu",
          title: 'I joined the Structural System Reliability Group (SSRG) at SNU.',
          description: "",
          section: "News",},{id: "news-i-joined-the-engineering-risk-analysis-group-era-at-tum-as-a-postdoctoral-researcher",
          title: 'I joined the Engineering Risk Analysis Group (ERA) at TUM as a postdoctoral...',
          description: "",
          section: "News",},{id: "projects-postdoctoral-fellowship-program",
          title: 'Postdoctoral Fellowship Program',
          description: "Deep reinforcement learning-based optimal maintenance strategy for large-scale infrastructure networks under seismic risk",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},];
