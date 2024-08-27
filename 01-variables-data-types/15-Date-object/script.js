let x;
let d = new Date();

//DAte Methods
x = d.toString();
x = d.getTime();
x = d.valueOf();
x = d.getFullYear();
x = d.getMonth();
x = d.getDate();
x = d.getDay();
x = d.getHours();
x = d.getMinutes();
x = d.getSeconds();
x = d.getMilliseconds();
x = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;

// Intl.DateTimeFormat API (locale specific)
x = Intl.DateTimeFormat("en-US", "Asia/Delhi").format(d);
x = Intl.DateTimeFormat("default").format(d);

x = Intl.DateTimeFormat("default", { month: "long" }).format(d);

x = d.toLocaleString("default", { month: "short" });

x = d.toLocaleString("default", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  timeZone: "Asia/Kolkata",
});

console.log(x);
