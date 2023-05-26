export default function Mission() {
  return (
    <div
      id="mission"
      className="flex flex-row items-center justify-between  max-w-5xl mx-auto mt-32"
    >
      <div className="basis-2/3">
        <h2 className="font-serif text-2xl font-normal">
          Основная миссия - помочь вам развивать свой бизнес и решать все
          вопросы логистики
        </h2>
        <p className="mt-6 font-serif text-base font-normal">
          Доставляем посылки с 1980 года. Успешно работаем в северной столице
          России с 2011 года.
        </p>
        <p className="mt-6 font-serif text-base font-normal">
          Помогаем доставлять посылки как для физ., так и для юр. лиц.
          Предлагаем выгодную стоимость и короткие сроки доставки, при этом
          предоставляем высокий уровень сервиса.
        </p>
        <p className="mt-6 font-serif text-base font-normal">
          Более 2500 офисов и расположение по всему миру позволяет нам браться
          за самые сложные и нестандартные задачи.
        </p>
      </div>
      <div>
        <div class="block rounded-lg bg-white  pt-3 pb-2 pl-4 pr-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <h5 class="mb-2 text-3xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            2500
          </h5>
          <p class="mb-4 text-lg text-neutral-600 dark:text-neutral-200">
            офисов в мире
          </p>
        </div>
        <div class="mt-10 block rounded-lg bg-white  pt-3 pb-2 pl-4 pr-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <h5 class="mb-2 text-3xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            44
          </h5>
          <p class="mb-4 text-lg text-neutral-600 dark:text-neutral-200">
            страны
          </p>
        </div>
      </div>
    </div>
  );
}
