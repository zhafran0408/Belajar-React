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

  // LOGIKA PESAN DINAMIS SESUAI KONDISI ANGKA
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
            <Badge color={accentColor} variant='surface' radius='full' size='2'>
              Counter Pro
            </Badge>

            <Badge
              color={isTimerActive ? "amber" : "gray"}
              variant='soft'
              radius='full'
              size='1'
              style={{ transition: "all 0.3s ease" }}>
              <LightningBoltIcon /> {isTimerActive ? "Timer Running" : "Idle"}
            </Badge>
          </Flex>

          {/* DISPLAY ANGKA */}
          <Box style={{ margin: "8px 0", textAlign: "center" }}>
            <Heading
              size='9'
              weight='bold'
              color={accentColor}
              style={{
                fontSize: "80px",
                lineHeight: 1,
                letterSpacing: "-3px",
                transition: "all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)",
              }}>
              {angka}
            </Heading>
          </Box>

          {/* BOX PESAN YANG MUNCIUL (CALLOUT COMPONENT) */}
          <Callout.Root
            color={status.color}
            variant='soft'
            size='1'
            style={{ width: "100%", borderRadius: "14px" }}>
            <Callout.Icon>{status.icon}</Callout.Icon>
            <Callout.Text size='2'>{status.text}</Callout.Text>
          </Callout.Root>

          {/* ACTION BUTTONS */}
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
  );
}
