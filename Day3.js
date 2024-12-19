// Task1
// أول حاجة بنعمل متغيرات هنحتاجها
let sum = 0; // علشان نحسب مجموع الأرقام
let value; // علشان نخزن كل قيمة المستخدم يدخلها

do {
  // بنسأل المستخدم يدخل رقم
value = prompt("Enter a number (stop when you enter 0 or the sum exceeds 100):");

  // بنتأكد إن المدخل رقم فعلاً
if (isNaN(value)) {
    alert("Please enter a valid number."); // لو مش رقم، بنقول له يدخل رقم
continue; // نرجع نطلب منه يدخل رقم تاني
}

  value = Number(value); // نحول القيمة لرقم
  sum += value; // نضيف القيمة للمجموع

} while (value !== 0 && sum <= 100); // الشرط: نكمل لو القيمة مش صفر والمجموع أقل أو يساوي 100

// في الآخر، نعرض المجموع الكلي
alert(`The total sum of the entered numbers is: ${sum}`);


//Task2
// بنعرض رسالة ترحيب
alert("Welcome to my site!");

// بنسأل المستخدم عن اسمه
let userName = prompt("Please enter your name:");

// المستخدم يختار لون (أحمر، أخضر، أو أزرق)
let color = prompt("Choose a color (red, green, or blue):").toLowerCase(); // نحول الإدخال للحروف الصغيرة

// نعرض الترحيب بالاسم وباللون اللي اختاره
document.body.innerHTML = `<p style="color: ${color}">Welcome ${userName}</p>`;

//Task3

// بنطلب من المستخدم يدخل رسالة
let message = prompt("Enter a message to display:");

// بنستخدم loop علشان نكرر من h1 لحد h6
for (let i = 1; i <= 6; i++) {
  // بنضيف كل عنصر عنوان مع الرسالة جوة الصفحة
document.body.innerHTML += `<h${i}>${message}</h${i}>`;
}





