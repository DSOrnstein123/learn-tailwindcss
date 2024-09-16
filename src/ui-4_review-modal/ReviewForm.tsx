import { Input } from "./Input";
import { Rating } from "./Rating";

export const ReviewForm = () => {
  return (
    <div className="my-4 w-[42rem] space-y-8 rounded-3xl bg-white p-16">
      <div className="font-merriweather text-2xl font-black">
        Overall rating
      </div>

      <div>
        <Rating />
        <p className="font-poppins text-sm">Click to rate</p>
      </div>

      <Input
        title="Review title"
        placeholder="Example: Easy to use"
        type="text"
      />

      <div>
        <p className="mb-4 font-poppins font-medium">
          Would you recommend this product to a friend?
        </p>

        <input
          className="scale-125 accent-black"
          type="radio"
          id="yes"
          value="yes"
          name="recommend"
        />
        <label className="ml-[6px] mr-6" htmlFor="yes">
          Yes
        </label>

        <input
          className="scale-125 accent-black"
          type="radio"
          id="no"
          value="no"
          name="recommend"
        />
        <label className="ml-[6px]" htmlFor="no">
          No
        </label>
      </div>

      <Input
        title="Product review"
        placeholder="Example: Since I bought this a month ago, it has been used a lot. What I like best/what is worst about this product is ..."
        type="textarea"
      />

      <div className="flex gap-x-2">
        <div className="grow">
          <Input title="Nickname" placeholder="Example: bob27" type="text" />
        </div>

        <div className="grow">
          <Input
            title="Email address (will not be published)"
            placeholder="Example: your@email.com"
            type="text"
          />
        </div>
      </div>

      <div className="flex items-center">
        <input
          type="checkbox"
          id="accept"
          name="terms-and-conditions"
          value="accept"
          className="mr-1"
        />
        <label htmlFor="accept" className="font-poppins font-medium">
          I accept the <span className="underline">terms and conditions</span>
        </label>
      </div>

      <div className="font-poppins text-sm font-medium">
        You will be able to receive emails in connection with this review (eg if
        others comment on your review). All emails contain the option to
        unsubscribe. We can use the text and star rating from your review in
        other marketing.
      </div>

      <button className="rounded-md bg-[#121633] p-4 font-poppins font-medium text-white">
        Submit product review
      </button>
    </div>
  );
};
