// Heroes Navigation
const hamButton1 = document.querySelector("#heroes-menu");
const navigation1 = document.querySelector(".heroes-navigation");

hamButton1.addEventListener("click", () => {
  navigation1.classList.toggle("open");
  hamButton1.classList.toggle("open");
});

// Heroes Page
// makeCards function
const makeCards = (heroesList) => {
  const container = document.querySelector("#heroes");
  container.innerHTML = "";
  heroesList.forEach((hero) => {
      container.innerHTML += `<div class="card">
          <h2>${hero.name}</h2>

          <p><b>Health:</b> ${hero.health}</p>
          <p><b>Damage:</b> ${hero.damage}</p>
          <p><b>Mana:</b> ${hero.mana}</p>

          <figure>
              <img src="${hero.url}" alt="${hero.name} img" loading="lazy" width="120" height="70">
          </figure>
      </div>`;
  });
};

// heroes list
const heroesList = [
  {
    name: "Axe",
    health: 670,
    damage: 55,
    mana: 290,
    role: ["Carry", "Initiator", "Durable", "Disabler"],
    url: "images/axe.webp"
  },
  {
    name: "Beastmaster",
    health: 670,
    damage: 50,
    mana: 260,
    role: ["Nuker", "Initiator", "Durable", "Disabler"],
    url: "images/beastmaster.webp"
  },
  {
    name: "Bounty Hunter",
    health: 540,
    damage: 60,
    mana: 340,
    role: ["Escape", "Support", "Nuker"],
    url: "images/bounty-hunter.webp"
  },
  {
    name: "Brewmaster",
    health: 630,
    damage: 50,
    mana: 250,
    role: ["Nuker", "Initiator", "Durable", "Disabler", "Carry"],
    url: "images/brewmaster.webp"
  },
  {
    name: "Bristleback",
    health: 600,
    damage: 60,
    mana: 240,
    role: ["Nuker", "Initiator", "Durable", "Carry"],
    url: "images/bristle-back.webp"
  },
  {
    name: "Broodmother",
    health: 530,
    damage: 50,
    mana: 290,
    role: ["Nuker", "Carry", "Pusher", "Escape"],
    url: "images/broodmother.webp"
  },
  {
    name: "Centaur Warrunner",
    health: 720,
    damage: 65,
    mana: 250,
    role: ["Nuker", "Initiator", "Durable", "Disabler", "Escape"],
    url: "images/centaur.webp"
  },
  {
    name: "Chen",
    health: 620,
    damage: 55,
    mana: 300,
    role: ["Support", "Pusher"],
    url: "images/chen.webp"
  },
  {
    name: "Crystal Maiden",
    health: 500,
    damage: 50,
    mana: 300,
    role: ["Nuker", "Disabler", "Support"],
    url: "images/crystal-maiden.webp"
  },
  {
    name: "Drow Ranger",
    health: 470,
    damage: 55,
    mana: 250,
    role: ["Disabler", "Carry", "Pusher"],
    url: "images/drow-ranger.webp"
  },
  {
    name: "Ember Spirit",
    health: 600,
    damage: 60,
    mana: 310,
    role: ["Nuker", "Initiator", "Disabler", "Carry", "Escape"],
    url: "images/ember-spirit.webp"
  },
  {
    name: "Faceless Void",
    health: 560,
    damage: 60,
    mana: 250,
    role: ["Initiator", "Disabler", "Carry", "Escape"],
    url: "images/faceless-void.webp"
  },
  {
    name: "Lina",
    health: 560,
    damage: 60,
    mana: 430,
    role: ["Nuker", "Disabler", "Carry", "Escape", "Support"],
    url: "images/lina.webp"
  },
  {
    name: "Lycan",
    health: 690,
    damage: 55,
    mana: 350,
    role: ["Durable", "Carry", "Pusher", "Escape", "Jungler"],
    url: "images/lycan.webp"
  },
  {
    name: "Monkey King",
    health: 515,
    damage: 55,
    mana: 310,
    role: ["Initiator", "Disabler", "Carry", "Escape"],
    url: "images/monkey-king.webp"
  },
  {
    name: "Ogre Magi",
    health: 630,
    damage: 70,
    mana: 120,
    role: ["Nuker", "Initiator", "Durable", "Disabler", "Support"],
    url: "images/ogre-magi.webp"
  },
  {
    name: "Phantom Assassin",
    health: 530,
    damage: 50,
    mana: 250,
    role: ["Carry", "Escape"],
    url: "images/phantom-assassin.webp"
  },
  {
    name: "Phantom Lancer",
    health: 530,
    damage: 60,
    mana: 320,
    role: ["Nuker", "Carry", "Pusher", "Escape"],
    url: "images/phantom-lancer.webp"
  },
  {
    name: "Phoenix",
    health: 620,
    damage: 55,
    mana: 265,
    role: ["Nuker", "Initiator", "Disabler", "Escape", "Support"],
    url: "images/phoenix.webp"
  },
  {
    name: "Pudge",
    health: 670,
    damage: 75,
    mana: 265,
    role: ["Nuker", "Initiator", "Durable", "Disabler"],
    url: "images/pudge.webp"
  },
  {
    name: "Skywrath Mage",
    health: 580,
    damage: 45,
    mana: 350,
    role: ["Nuker", "Disabler", "Support"],
    url: "images/skywrath-mage.webp"
  },
  {
    name: "Sniper",
    health: 540,
    damage: 45,
    mana: 250,
    role: ["Nuker", "Carry"],
    url: "images/sniper.webp"
  },
  {
    name: "Storm Spirit",
    health: 580,
    damage: 55,
    mana: 350,
    role: ["Nuker", "Initiator", "Disabler", "Carry", "Pusher", "Escape"],
    url: "images/storm-spirit.webp"
  },
  {
    name: "Undying",
    health: 600,
    damage: 60,
    mana: 400,
    role: ["Nuker", "Durable", "Disabler", "Support"],
    url: "images/undying.webp"
  },
  {
    name: "Ursa",
    health: 670,
    damage: 45,
    mana: 260,
    role: ["Carry", "Durable", "Disabler"],
    url: "images/ursa.webp"
  },
  {
    name: "Viper",
    health: 580,
    damage: 50,
    mana: 260,
    role: ["Nuker", "Carry", "Durable", "Disabler"],
    url: "images/viper.webp"
  },
  {
    name: "Windranger",
    health: 520,
    damage: 50,
    mana: 340,
    role: ["Nuker", "Carry", "Escape", "Support", "Disabler"],
    url: "images/windranger.webp"
  },
  {
    name: "Wraith King",
    health: 600,
    damage: 60,
    mana: 290,
    role: ["Carry", "Initiator", "Escape", "Durable", "Disabler"],
    url: "images/wraith-king.webp"
  },
];

// Buttons and EventListeners for Heroes Page
document.querySelector("#all").addEventListener('click', () => {
  document.querySelector("#category-title").textContent = "All"
  makeCards(heroesList);
})

document.querySelector("#carry").addEventListener('click', () => {
  document.querySelector("#category-title").textContent = "Carry"
  const carryHeroes = heroesList.filter((hero) => hero.role.includes('Carry'));
  makeCards(carryHeroes);
})

document.querySelector("#initiator").addEventListener('click', () => {
  document.querySelector("#category-title").textContent = "Initiator"
  const initiatorHeroes = heroesList.filter((hero) => hero.role.includes('Initiator'));
  makeCards(initiatorHeroes);
})

document.querySelector("#escape").addEventListener('click', () => {
  document.querySelector("#category-title").textContent = "Escape"
  const escapeHeroes = heroesList.filter((hero) => hero.role.includes('Escape'));
  makeCards(escapeHeroes);
})

document.querySelector("#durable").addEventListener('click', () => {
  document.querySelector("#category-title").textContent = "Durable"
  const durableHeroes = heroesList.filter((hero) => hero.role.includes('Durable'));
  makeCards(durableHeroes);
})

document.querySelector("#nuker").addEventListener('click', () => {
  document.querySelector("#category-title").textContent = "Nuker"
  const nukerHeroes = heroesList.filter((hero) => hero.role.includes('Nuker'));
  makeCards(nukerHeroes);
})

document.querySelector("#support").addEventListener('click', () => {
  document.querySelector("#category-title").textContent = "Support"
  const supportHeroes = heroesList.filter((hero) => hero.role.includes('Support'));
  makeCards(supportHeroes);
})

document.querySelector("#disabler").addEventListener('click', () => {
  document.querySelector("#category-title").textContent = "Disabler"
  const disablerHeroes = heroesList.filter((hero) => hero.role.includes('Disabler'));
  makeCards(disablerHeroes);
})

document.querySelector("#pusher").addEventListener('click', () => {
  document.querySelector("#category-title").textContent = "Pusher"
  const pusherHeroes = heroesList.filter((hero) => hero.role.includes('Pusher'));
  makeCards(pusherHeroes);
})

document.querySelector("#jungler").addEventListener('click', () => {
  document.querySelector("#category-title").textContent = "Jungler"
  const junglerHeroes = heroesList.filter((hero) => hero.role.includes('Jungler'));
  makeCards(junglerHeroes);
})

 // initial run
 makeCards(heroesList);