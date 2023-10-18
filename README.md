This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.

# Jawaban A
- Bagaimana Updown Btn Jika voters = 0 apakah disable ?
- jika tinggi gambar seukuran dengan tinggi text, ketika text hanya 1 line gambar akan sangat kecil, bagaimana kalau kita kasih default height ? dan apakah ada kemungkinan jika user hanya mengupload gambar tanpa text ?

# Jawaban C
1. Struktur data
 - User data => {nama, usia, gender, minat, foto profil}
 - konesi => {dataUser yang terkoneksi dan komunitas}
 - rekomendasi => {point, userdata, type= sport, religi, politik, dll}

2. 
- Jika tidak ada koneksi kita ambil dari data minat user, dan data minat user bisa kita dapatkan dengan memberikan form yang berkaitan dengan minat user, selain itu kita juga bisa menampilkan rekomendasi default dari sistem yang memiliki type yang berbeda-beda(Olahraga, religi, masak, dll) dan tentunya user akan berinteraksi dengan rekomendasi tersebut seperti contohnya like, dari itu pula kita akan mengetahui minat dari usernya
- Jika terlalu banyak kita bisa membuat limit rekomendasi dan mensortnya by point rekomendasi. contoh rekomendasi yang berasal dari  koneksi pengguna akan mendapatkan point 100 dan yang berasal dari komunitas mendapatkan point 50, jadi setiap data rekomendasi akan memiliki data point yang nantinya kita sort dari urutan point tertinggi dan dibuat limit perhari agar user tidak bosan dengan rekomendasi yang sama setiap harinya. misal tampilkan 100 rekomendasi pertama untuk hari ke 1, lalu hari ke 2 kita tampilkan 100 rekomendasi ke 2 

3. 
a. untung menguji fitur ini kita memerluka beberapa user dengan kondisi yang berbeda 
- user memiliki koneksi & komunitas
- user hanya memiliki salah satu
- user tidak memiliki semuanya
b. ketika user tidak memilik semuanya, tampilkan data rekomendasi default lalu klik like atau add koneksi setelah itu kita akan memberikan data rekomendasi sesuai dengan type user rekomendasi yang di klik like/add koneksi 

C2. Algoritma
1. filter rekomendasi by teman koneksi
 - identifikasi koneksi user yang memiliki kesamaan dengan user yang terkoneksi dengan userLogin {usia, minat, sering dikunjungi dll}
 - berikan point di tiap user recomendasi per type kesamaan 
 - urutkan dari yang paling besar & buat limit seperti pagination
 - tampilkan
2. filter rekomendasi by komunitas
 - identifikasi koneksi user yang memiliki kesamaan komunitas dengan userLogin
 - berikan point di tiap user rekomendasi kesamaan komunitas & yang memiliki kesamaan minat & komunitas sama diberi point lebih tinggi dibandingkan hanya memiliki kesamaan pada salah satunya
 - urutkan dari yang paling besar & buat limit seperti pagination
 - tampilkan
3. filter rekomendasi by default jika tidak memiliki koneksi 
 - identifikasi user top global(follower terbanyak/ postingan dengan voters) yang berbeda tiap minat nya
 - lalu urutkan / grouping per type minat user 
 - berikan point tertinggi untuk rekomendasi yang top global & minat yang sama
 - urutkan by point
 - tampilkan 





