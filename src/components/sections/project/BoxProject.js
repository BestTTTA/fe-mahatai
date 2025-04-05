export const projectCards = Array.from({ length: 106 }, (_, index) => {
  const categories = ["สิ่งแวดล้อม", "โครงการรณรงค์", "สังคม"];
  const randomCategory = categories[Math.floor(Math.random() * categories.length)];
  const randomAmount = Math.floor(Math.random() * 500000).toLocaleString();
  const randomTarget = Math.floor(Math.random() * 1000000 + 100000).toLocaleString();
  
  return {
    image: "https://www.mahatai.org/wp-content/uploads/2025/04/450097_0-300x225.jpg",
    title: `โครงการพัฒนาชุมชนและสิ่งแวดล้อม รุ่นที่ ${index + 1}`,
    description: "รายละเอียดโครงการ...",
    category: randomCategory,
    amount: randomAmount,
    target: randomTarget,
  };
});
