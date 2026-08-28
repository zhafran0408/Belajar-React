/** @format */

import React, { useEffect, useState } from "react";

import {
  Card,
  Heading,
  Text,
  Button,
  Flex,
  Badge,
  IconButton,
  Box,
  Callout,
} from "@radix-ui/themes";

import {
  PlusIcon,
  MinusIcon,
  ResetIcon,
  LightningBoltIcon,
  InfoCircledIcon,
  CheckCircledIcon,
  ExclamationTriangleIcon,
} from "@radix-ui/react-icons";

export default function Simplecounter() {
  const [angka, setAngka] = useState(0);

  const [isTimerActive, setIsTimerActive] = useState(false);

  const [showExplanation, setShowExplanation] = useState(false);

  useEffect(() => {
    console.log(`count berubah jadi: ${angka}`);

    setIsTimerActive(true);

    const timer = setTimeout(() => {
      console.log("saya dijalankan! (setelah 3 detik)");

      setIsTimerActive(false);
    }, 3000);

    return () => {
      clearTimeout(timer);

      console.log("saya dibersihkan!");
    };
  }, [angka]);

  const tambah = () => setAngka((prev) => prev + 1);

  const kurang = () => setAngka((prev) => prev - 1);

  const reset = () => {
    setAngka(0);

    setIsTimerActive(false);
  };

  const accentColor =
    angka > 0 ? "indigo"
    : angka < 0 ? "crimson"
    : "gray";

  // LOGIKA PESAN SESUAI NILAI ANGKA

  const getPesanStatus = () => {
    if (angka === 0) {
      return {
        text: "Nilai saat ini netral (0). Mulai tekan tombol!",
        icon: <InfoCircledIcon />,
        color: "gray",
      };
    } else if (angka > 0) {
      return {
        text: `Angka positif (${angka}). Bagus! Counter terus meningkat.`,
        icon: <CheckCircledIcon />,
        color: "indigo",
      };
    } else {
      return {
        text: `Angka negatif (${angka}). Hati-hati, nilai di bawah 0.`,
        icon: <ExclamationTriangleIcon />,
        color: "crimson",
      };
    }
  };

  const status = getPesanStatus();

  return (
    <div>
      <Flex
        align='center'
        justify='center'
        style={{ minHeight: "440px", padding: "20px" }}>
        <Card
          size='3'
          style={{
            width: 360,
            padding: "28px",
            borderRadius: "28px",
            position: "relative",
            overflow: "hidden",
            backdropFilter: "blur(16px)",
            boxShadow:
              angka > 0 ? "0 25px 50px -12px rgba(99, 102, 241, 0.25)"
              : angka < 0 ? "0 25px 50px -12px rgba(225, 29, 72, 0.25)"
              : "0 25px 50px -12px rgba(0, 0, 0, 0.08)",
            transition: "box-shadow 0.4s ease",
          }}>
          <Flex direction='column' align='center' gap='4'>
            {/* TOP BAR */}

            <Flex justify='between' align='center' style={{ width: "100%" }}>
              <Badge
                color={accentColor}
                variant='surface'
                radius='full'
                size='2'>
                Counter Pro
              </Badge>

              <Badge
                color={isTimerActive ? "amber" : "gray"}
                variant='soft'
                radius='full'
                size='1'
                style={{ transition: "all 0.3s ease" }}>
                <LightningBoltIcon />

                {isTimerActive ? "Timer Running" : "Idle"}
              </Badge>
            </Flex>

            {/* DISPLAY ANGKA */}

            <Box
              style={{
                margin: "8px 0",
                textAlign: "center",
              }}>
              <Heading
                size='9'
                weight='bold'
                color={accentColor}
                style={{
                  fontSize: "80px",
                  lineHeight: 1,
                  letterSpacing: "-3px",
                }}>
                {angka}
              </Heading>
            </Box>

            {/* PESAN STATUS */}

            <Callout.Root
              color={status.color}
              variant='soft'
              size='1'
              style={{
                width: "100%",
                borderRadius: "14px",
              }}>
              <Callout.Icon>{status.icon}</Callout.Icon>

              <Callout.Text size='2'>{status.text}</Callout.Text>
            </Callout.Root>

            {/* BUTTON COUNTER */}

            <Flex gap='3' align='center' style={{ width: "100%" }} mt='1'>
              <Button
                size='3'
                color='gray'
                variant='soft'
                onClick={kurang}
                style={{
                  flex: 1,
                  cursor: "pointer",
                  fontWeight: "600",
                  borderRadius: "14px",
                  height: "46px",
                }}>
                <MinusIcon height='20' width='20' />
              </Button>

              <IconButton
                size='3'
                color='gray'
                variant='outline'
                onClick={reset}
                title='Reset ke 0'
                style={{
                  cursor: "pointer",
                  borderRadius: "14px",
                  height: "46px",
                  width: "46px",
                }}>
                <ResetIcon height='18' width='18' />
              </IconButton>

              <Button
                size='3'
                color={accentColor === "gray" ? "indigo" : accentColor}
                variant='solid'
                onClick={tambah}
                style={{
                  flex: 1,
                  cursor: "pointer",
                  fontWeight: "600",
                  borderRadius: "14px",
                  height: "46px",
                }}>
                <PlusIcon height='20' width='20' />
              </Button>
            </Flex>
          </Flex>
        </Card>
      </Flex>

      {/* TOMBOL PENJELASAN - RADIX UI */}

      <div
        style={{
          maxWidth: "850px",
          margin: "0 auto 40px",
          padding: "0 20px",
        }}>
        <Button
          size='3'
          onClick={() => setShowExplanation(!showExplanation)}
          style={{
            cursor: "pointer",
            width: "100%",
          }}>
          {showExplanation ?
            "Tutup Penjelasan useEffect"
          : "Pelajari useEffect"}
        </Button>

        {/* PENJELASAN */}

        {showExplanation && (
          <div
            style={{
              marginTop: "20px",
              background: "white",
              border: "1px solid #e5e7eb",
              borderRadius: "16px",
              padding: "28px",
              lineHeight: "1.8",
            }}>
            <h2>Apa itu useEffect?</h2>

            <p>
              <b>useEffect</b> adalah React Hook yang digunakan untuk
              menjalankan suatu pekerjaan setelah React menampilkan component.
            </p>

            <div
              style={{
                background: "#f5f5f5",
                padding: "16px",
                borderRadius: "10px",
                marginTop: "16px",
              }}>
              <code>
                useEffect(() =&gt; {"{"}
                <br />
                &nbsp;&nbsp;console.log("useEffect berjalan");
                <br />
                {"}"}, [angka]);
              </code>
            </div>

            <h3>1. Apa fungsi useEffect?</h3>

            <p>
              useEffect digunakan ketika kita ingin React melakukan suatu
              pekerjaan karena sesuatu terjadi.
            </p>

            <p>Contohnya:</p>

            <ul>
              <li>Menjalankan console.log</li>
              <li>Menggunakan timer</li>
              <li>Mengambil data dari API</li>
              <li>Membersihkan timer</li>
              <li>Merespons perubahan state</li>
            </ul>

            <h3>2. Apa arti bagian [angka]?</h3>

            <p>
              Bagian ini disebut <b>dependency array</b>.
            </p>

            <div
              style={{
                background: "#f5f5f5",
                padding: "16px",
                borderRadius: "10px",
              }}>
              <code>[angka]</code>
            </div>

            <p>
              Artinya useEffect memperhatikan nilai <b>angka</b>.
            </p>

            <p>Ketika angka berubah:</p>

            <div
              style={{
                background: "#f8fafc",
                padding: "16px",
                borderRadius: "10px",
              }}>
              Klik + atau -<br />
              ↓<br />
              angka berubah
              <br />
              ↓<br />
              React render ulang
              <br />
              ↓<br />
              useEffect dijalankan
            </div>

            <h3>3. Kenapa kode ini menggunakan useEffect?</h3>

            <div
              style={{
                background: "#f5f5f5",
                padding: "16px",
                borderRadius: "10px",
              }}>
              <code>
                useEffect(() =&gt; {"{"}
                <br />
                &nbsp;&nbsp;console.log(`count berubah jadi: ${"{angka}"}`);
                <br />
                {"}"}, [angka]);
              </code>
            </div>

            <p>
              Karena kita ingin menjalankan console.log setiap kali nilai{" "}
              <b>angka berubah</b>.
            </p>

            <h3>4. Apa fungsi setTimeout?</h3>

            <div
              style={{
                background: "#f5f5f5",
                padding: "16px",
                borderRadius: "10px",
              }}>
              <code>
                setTimeout(() =&gt; {"{"}
                <br />
                &nbsp;&nbsp;console.log("Saya dijalankan!");
                <br />
                {"}"}, 3000);
              </code>
            </div>

            <p>
              setTimeout digunakan untuk menjalankan kode setelah waktu
              tertentu.
            </p>

            <p>
              Angka <b>3000</b> berarti 3000 milidetik atau 3 detik.
            </p>

            <h3>5. Apa itu cleanup?</h3>

            <p>Cleanup digunakan untuk membersihkan pekerjaan sebelumnya.</p>

            <div
              style={{
                background: "#f5f5f5",
                padding: "16px",
                borderRadius: "10px",
              }}>
              <code>
                return () =&gt; {"{"}
                <br />
                &nbsp;&nbsp;clearTimeout(timer);
                <br />
                {"}"};
              </code>
            </div>

            <p>
              Kalau angka berubah lagi sebelum 3 detik, timer lama dibatalkan
              terlebih dahulu.
            </p>

            <h3>Analogi gampang</h3>

            <p>
              Bayangkan <b>useEffect adalah petugas</b> yang ditugaskan
              mengawasi angka.
            </p>

            <div
              style={{
                background: "#f8fafc",
                padding: "20px",
                borderRadius: "10px",
              }}>
              angka berubah
              <br />
              ↓<br />
              Petugas melihat perubahan
              <br />
              ↓<br />
              useEffect bekerja
              <br />
              ↓<br />
              Timer 3 detik dimulai
              <br />
              ↓<br />
              Jika angka berubah lagi
              <br />
              ↓<br />
              Timer lama dibersihkan
              <br />
              ↓<br />
              Timer baru dimulai
            </div>

            <h3>Kesimpulan</h3>

            <p>
              <b>useState</b> digunakan untuk menyimpan data.
            </p>

            <p>
              <b>useEffect</b> digunakan untuk menjalankan pekerjaan tambahan
              ketika terjadi perubahan.
            </p>

            <p>Pada project ini:</p>

            <div
              style={{
                background: "#f8fafc",
                padding: "20px",
                borderRadius: "10px",
              }}>
              <b>angka</b> berubah
              <br />
              ↓<br />
              useEffect berjalan
              <br />
              ↓<br />
              console.log dijalankan
              <br />
              ↓<br />
              timer aktif selama 3 detik
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
