import "./App.css";
import summary from "../data.json";
import Card from "./component/Card";

function App() {
  return (
    <main className="flex flex-col w-screen items-center justify-center min-h-screen bg-gray-100 text-[#372D85]">
      <section className="grid md:grid-cols-2 md:max-w-3xl bg-white rounded-2xl shadow-lg">
        <div className="bg-[linear-gradient(to_bottom,_#9C4DFF_0%,_#4636E3_45%,_#4636E3_100%)] rounded-b-2xl md:rounded-2xl flex flex-col justify-evenly items-center gap-6 w-full p-6 text-white">
          <p className="text-[#f6faff] text-center text-xl">Your Result</p>

          <div className="flex flex-col rounded-full bg-[linear-gradient(to_bottom,_#4E21CA_10%,_#2421CA00_100%)] items-center justify-center p-10 w-36 h-36 mx-auto">
            <p className="font-bold text-6xl">76</p>
            <p className="text-[#f6faff] text-center font-semibold">of 100</p>
          </div>

          <p className="text-[#ffff] text-center text-3xl font-bold">Great</p>
          <p className="text-[#f6faff] text-center text-xl">
            You scored higher than 65% of people who have taken these tests.
          </p>
        </div>

        <div className="flex flex-col gap-6 p-6">
          <p className="text-[hsla(241, 72%, 46%, 0)] text-xl font-semibold">
            Summary
          </p>

          {summary.map((summary) => (
            <Card
              category={summary.category}
              icon={summary.icon}
              score={summary.score}
              color={summary.color}
              bgCol={summary.bgCol}
            />
          ))}
          <button className="bg-[linear-gradient(to_bottom,_#9C4DFF_0%,_#4636E3_45%,_#4636E3_100%)] text-white rounded-ee-full py-3 px-6 font-bold text-lg">
            Continue
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;
