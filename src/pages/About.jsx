import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-[#8573C2] text-white flex items-center justify-center px-6 py-10">
      <div className="bg-white text-black rounded-lg shadow-xl max-w-2xl w-full p-8 space-y-6">
        <h1 className="text-3xl font-bold text-center text-[#4B3F72]">About ThinkZap</h1>

        <p className="text-lg">
          <span className="font-semibold">ThinkZap</span> is a fun and interactive quiz platform designed to test and grow your knowledge in a playful way.
          Whether you’re brushing up on your basics or challenging your friends, ThinkZap makes learning exciting and quick.
        </p>

        <p className="text-lg">
          This app features simple one-question-at-a-time UI, instant answer feedback, and colorful responses—perfect for casual learners and
          students alike.
        </p>

        <p className="text-lg">
          Built with React and styled for responsiveness, ThinkZap works smoothly across all devices—from mobile to desktop—offering a
          seamless experience wherever you are.
        </p>

        <div className="text-center pt-4">
          <span className="block text-md text-gray-700 italic">
            Keep playing. Keep learning. Only on <span className="font-bold text-[#4B3F72]">ThinkZap</span>! 🎉
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
