export interface IUser {
  name: string;
  imgUrl: string;
  quotes: string;
  chatHistory?: { message: string; date: Date }[];
}

export const User: IUser = {
  name: "I'm Batman",
  imgUrl: "/assets/images/batman.png",
  quotes: "Some quotes goes here...."
};
