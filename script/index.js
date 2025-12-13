const modalFunc = () => {
  const modal = document.querySelector(".cart-modal__overlay");
  const cartBtn = document.querySelector("#cart-button");

  const openModal = () => {
    modal.classList.add("open");
  };

  const closeModal = () => {
    modal.classList.remove("open");
  };

  cartBtn.addEventListener("click", () => {
    openModal();
  });

  modal.addEventListener("click", (event) => {
    if (
      event.target.classList.contains("cart-modal__overlay") ||
      event.target.closest(".cart-modal__header--close")
    ) {
      closeModal();
    }
  });
};

const restsFunc = () => {
  const container = document.querySelector("#rests-container");
  const restArray = [
    {
      id: 0,
      title: "Пицца Плюс",
      time: 50,
      raiting: 4.5,
      price: 900,
      type: "Пицца",
      image: "pizza.jpg",
    },
    {
      id: 1,
      title: "Тануки",
      time: 50,
      raiting: 4.5,
      price: 900,
      type: "Пицца",
      image: "tanuki.jpg",
    },
    {
      id: 2,
      title: "FoodBand",
      time: 50,
      raiting: 4.5,
      price: 900,
      type: "Пицца",
      image: "foodBand.jpg",
    },
    {
      id: 3,
      title: "Жадина-пицца",
      time: 50,
      raiting: 4.5,
      price: 900,
      type: "Пицца",
      image: "greedyPizza.jpg",
    },
    {
      id: 4,
      title: "Точка еды",
      time: 50,
      raiting: 4.5,
      price: 900,
      type: "Пицца",
      image: "foodPoint.jpg",
    },
    {
      id: 5,
      title: "PizzaBurger",
      time: 50,
      raiting: 4.5,
      price: 900,
      type: "Пицца",
      image: "pizzaBurger.jpg",
    },
  ];

  const loading = () => {
    container.innerHTML = '<p style ="width: 100%">Загрузка</p>';
  };
  const radnerResrs = (array) => {
    container.innerHTML = "";
    array.forEach((card) => {
      container.insertAdjacentHTML(
        "beforeend",
        `
        <a href="goods.html?id=${card.id}" class="products-card">
                <div class="products-card__image">
                  <img src="./img/rests/${card.image}" alt="${card.image}" />
                </div>
                <!-- /.products-card__image -->
                <div class="products-card__description">
                  <div class="products-card__description-row">
                    <div class="products-card__description--title">
                      ${card.title}
                    </div>
                    <!-- /.products-card__description--title -->
                    <div class="products-card__description--badge">   ${card.time} мин </div>
                    <!-- /.products-card__description--badge -->
                  </div>
                  <!-- /.products-card__description-row -->
                  <div class="products-card__description-row">
                    <div class="products-card__description--info">
                      <div class="products-card__description--raiting">
                        <img src="/img/goods/star.png" alt="star" />
                           ${card.raiting}
                      </div>
                      <!-- /.products-card__description--raiting -->
                      <div class="products-card__description--price">
                        От    ${card.price} ₽
                      </div>
                      <!-- /.products-card__description--price -->
                      <div class="products-card__description--group">   ${card.type}</div>
                      <!-- /.products-card__description--group -->
                    </div>
                  </div>
                  <!-- /.products-card__description-row -->
                </div>

                <!-- /.products-card__description -->
              </a>
              `
      );
    });
  };

  if (container) {
    loading();
    setTimeout(() => {
      radnerResrs(restArray);
    }, 1000);
  }
};
const goodsFunc = () => {
  const container = document.querySelector("#products-container");
  const restArray = [
    {
      id: 0,
      title: "Ролл угорь стандарт",
      desc: "Рис, угорь, соус унаги, кунжут, водоросли нори.",
      price: 250,
      image: "good-1.jpg",
    },
    {
      id: 1,
      title: "Калифорния лосось стандарт",
      desc: "Рис, лосось, авокадо, огурец, майонез, икра масаго, водоросли нори.",
      price: 395,
      image: "good-2.jpg",
    },
    {
      id: 2,
      title: "Окинава стандарт",
      desc: " Рис, креветка отварная, сыр сливочный, лосось, огурец свежий...",
      price: 250,
      image: "good-3.jpg",
    },
    {
      id: 3,
      title: "Цезарь маки хl",
      desc: "Рис, угорь, соус унаги, кунжут, водоросли нори.",
      price: 250,
      image: "good-4.jpg",
    },
    {
      id: 4,
      title: "Ясай маки стандарт 185 г",
      desc: "Рис, куриная грудка копченая, икра масаго, томат, айсберг, соус цезарь...",
      price: 250,
      image: "good-5.jpg",
    },
    {
      id: 5,
      title: "Ролл с креветкой стандарт",
      desc: "Рис, водоросли нори, креветки отварные, сыр сливочный, огурцы",
      price: 250,
      image: "good-6.jpg",
    },
  ];

  const loading = () => {
    container.innerHTML = '<p style ="width: 100%">Загрузка</p>';
  };
  const radnerResrs = (array) => {
    container.innerHTML = "";
    array.forEach((card) => {
      container.insertAdjacentHTML(
        "beforeend",
        `
        <div class="products-card__image">
          <img src="./img/goods/${card.image}" alt="good-1" />
                </div>
                <!-- /.products-card__image -->
                <div class="products-card__description">
                  <div class="products-card__description-row">
                    <h5 class="products-card__description--name">
                      ${card.title}
                    </h5>
                    <!-- /.products-card__description--name -->
                  </div>
                  <!-- /.products-card__description-row -->
                  <div class="products-card__description-row">
                    <p class="products-card__description--text">
                         ${card.desc}
                    </p>
                    <!-- /.products-card__description--text -->
                  </div>
                  <!-- /.products-card__description-row -->
                  <div class="products-card__description-row">
                    <div class="products-card__description-controls">
                      <buttons class="btn btn-primary">
                        В корзину
                        <img src="./img/shopping-cart.svg" alt="cart" />
                      </buttons>
                      <span class="products-card__description-controls--price"
                        >   ${card.price} ₽</span
                      >
                    </div>
                    <!-- /.products-card__description--controls -->
                  </div>
                  <!-- /.products-card__description-row -->
                </div>

                <!-- /.products-card__description -->
              </div>
              `
      );
    });
  };

  if (container) {
    loading();
    setTimeout(() => {
      radnerResrs(restArray);
    }, 1000);
  }
};

modalFunc();
restsFunc();
goodsFunc();
