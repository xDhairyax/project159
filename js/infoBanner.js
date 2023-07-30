AFRAME.registerComponent("info-banner", {
    schema: {
      itemId: { default: "", type: "string" },
    },
    update: function () {
      this.createBanner();
    },
    createBanner: function () {
      postersInfo = {
        thor: {
          banner_url: "./assets/thor.jpeg",
          title: "Thor",
          released_year: "1983",
          description:
            "Thor Odinson is a character appearing in American comic books published by Marvel Comics. Created by artist Jack Kirby, writer Stan Lee, and scripter Larry Lieber, the character first appeared in Journey into Mystery #83 (August 1962), debuting in the Silver Age of Comic Books.[4] Thor is based on the Norse mythological god of the same name. He is the Asgardian god of thunder, whose enchanted hammer Mjolnir enables him to fly and manipulate weather, among his other superhuman attributes. A founding member of the superhero team the Avengers, Thor has a host of supporting characters and enemies.",
        },
        avengers: {
          banner_url: "./assets/avengers.jpeg",
          title: "Avengers",
          released_year: "1962",
          description:
            "The Avengers are a team of superheroes appearing in American comic books published by Marvel Comics, created by writer-editor Stan Lee and artist/co-plotter Jack Kirby. The team made its debut in The Avengers #1 (cover-dated September 1963). Labeled Earth's Mightiest Heroes,the original Avengers consisted of Iron Man, Ant-Man, Hulk, Thor and the Wasp",
        },
        "justice-league": {
          banner_url: "./assets/justice.jpeg",
          title: "Justice league",
          released_year: "1942",
          description:
            "The Justice League is a team of superheroes appearing in American comic books published by DC Comics. The team first appeared in The Brave and the Bold #28 (March 1960). The team was conceived by writer Gardner Fox as a revival of the Justice Society of America, a similar team from DC Comics from the 1940s which had been pulled out of print due to a decline in sales.",
        },
        xmen: {
          banner_url: "./assets/xmen.jpeg",
          title: "X-Men",
          released_year: "1952",
          description:
            "The X-Men are a superhero team appearing in American comic books published by Marvel Comics. Created by artist/co-plotter Jack Kirby and writer/editor Stan Lee, the team first appearing in The X-Men #1 (September 1963).[1] Although initially cancelled in 1970 due to low sales, following its 1975 revival and subsequent direction under writer Chris Claremont, it became one of the most recognizable and successful franchises of Marvel Comics.",
        },
      };
      const { itemId } = this.data;
  
      const fadeBackgroundEl = document.querySelector("#fadeBackground");
  
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("id", `${itemId}-banner`);
  
      entityEl.setAttribute("geometry", {
        primitive: "plane",
        width: 0.9,
        height: 1,
      });
  
      entityEl.setAttribute("material", { color: "#000" });
      entityEl.setAttribute("position", { x: 0, y: 0.1, z: -1 });
  
      const item = postersInfo[itemId];
  
      const imageEl = this.createImageEl(item);
      const titleEl = this.createTitleEl(item);
      const descriptionEl = this.createDescriptionEl(item);
  
      entityEl.appendChild(imageEl);
      entityEl.appendChild(titleEl);
      entityEl.appendChild(descriptionEl);
  
      fadeBackgroundEl.appendChild(entityEl);
    },
    createImageEl: function (item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("geometry", {
        primitive: "plane",
        width: 0.85,
        height: 0.4,
      });
      entityEl.setAttribute("material", { src: item.banner_url });
      entityEl.setAttribute("position", { x: 0, y: 0.3, z: 0.05 });
      return entityEl;
    },
    createTitleEl: function (item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("text", {
        shader: "msdf",
        anchor: "left",
        font: "https://cdn.aframe.io/examples/ui/Viga-Regular.json",
        width: 1.2,
        height: 2,
        color: "#fff",
        value: `${item.title} (${item.released_year})`,
      });
      entityEl.setAttribute("position", { x: -0.4, y: 0.02, z: 0.05 });
      return entityEl;
    },
    createDescriptionEl: function (item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("text", {
        shader: "msdf",
        anchor: "left",
        font: "https://cdn.aframe.io/examples/ui/Viga-Regular.json",
        width: 0.75,
        height: 2,
        color: "#fff",
        wrapCount: "40",
        value: item.description,
      });
      entityEl.setAttribute("position", { x: -0.4, y: -0.24, z: 0.05 });
      return entityEl;
    },
  });
  