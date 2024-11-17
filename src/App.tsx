function App() {
  return (
    <>
      <h1 className="text-3xl font-medium text-center text-white my-8">
        pomodoro
      </h1>

      <main className="max-w-[450px] mx-auto">
        <ul className="bg-slate-900 rounded-full flex p-2 justify-between">
          <li className="bg-red-400 rounded-full px-6 py-4 text-blue-950 font-medium">
            pomodoro
          </li>
          <li className="rounded-full px-6 py-4 text-blue-950">short break</li>
          <li className="rounded-full px-6 py-4 text-blue-950">long break</li>
        </ul>
      </main>
    </>
  );
}

export default App;
