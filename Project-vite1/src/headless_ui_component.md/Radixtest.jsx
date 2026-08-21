/** @format */

import { useState } from "react";
import {
  Theme,
  Box,
  Flex,
  Card,
  Heading,
  Text,
  Button,
  TextField,
  Badge,
  Separator,
  Avatar,
  Callout,
  Tabs,
  Table,
  DropdownMenu,
  Dialog,
  Slider,
  Switch,
  Tooltip,
  IconButton,
} from "@radix-ui/themes";
import {
  ArrowLeftIcon,
  InfoCircledIcon,
  DotsHorizontalIcon,
  MagnifyingGlassIcon,
  PlusIcon,
  GearIcon,
  PersonIcon,
  ExitIcon,
  CheckIcon,
  SunIcon,
  MoonIcon,
} from "@radix-ui/react-icons";

export default function RadixTest({ onBack }) {
  // 1. State Tema
  const [appearance, setAppearance] = useState("light"); // 'light' | 'dark'
  const [accentColor, setAccentColor] = useState("indigo");
  const [radius, setRadius] = useState("large");
  const [volume, setVolume] = useState([75]);
  const [notifications, setNotifications] = useState(true);

  // Toggle Dark / Light Mode
  const toggleAppearance = () => {
    setAppearance((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <Theme
      appearance={appearance}
      accentColor={accentColor}
      grayColor='slate'
      radius={radius}
      scaling='100%'>
      <Box
        style={{
          minHeight: "100vh",
          padding: "32px 20px",
          background:
            appearance === "light" ?
              "linear-gradient(135deg, #f8fafc 0%, #eef2ff 100%)"
            : "var(--gray-1)",
          transition: "background 0.3s ease",
        }}>
        <Box style={{ maxWidth: "1100px", margin: "0 auto" }}>
          {/* HEADER & TOP NAVBAR */}
          <Flex justify='between' align='center' mb='6' wrap='wrap' gap='3'>
            <Button
              variant='soft'
              color='gray'
              onClick={onBack}
              style={{ cursor: "pointer" }}>
              <ArrowLeftIcon /> Kembali ke Home
            </Button>

            <Flex align='center' gap='3'>
              <Badge size='2' color={accentColor} variant='surface'>
                Radix Themes Showcase 🚀
              </Badge>

              {/* TOGGLE DARK / LIGHT MODE */}
              <Tooltip
                content={
                  appearance === "light" ?
                    "Switch to Dark Mode"
                  : "Switch to Light Mode"
                }>
                <IconButton
                  variant='soft'
                  color='gray'
                  onClick={toggleAppearance}
                  style={{ cursor: "pointer" }}
                  size='2'>
                  {appearance === "light" ?
                    <MoonIcon />
                  : <SunIcon />}
                </IconButton>
              </Tooltip>

              {/* USER PROFILE DROPDOWN MENU */}
              <DropdownMenu.Root>
                <DropdownMenu.Trigger>
                  <IconButton
                    variant='ghost'
                    radius='full'
                    style={{ cursor: "pointer" }}>
                    <Avatar
                      fallback='AD'
                      size='2'
                      src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80'
                    />
                  </IconButton>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content variant='soft'>
                  <DropdownMenu.Item shortcut='⌘ P'>
                    <PersonIcon /> Profile Settings
                  </DropdownMenu.Item>
                  <DropdownMenu.Item shortcut='⌘ S'>
                    <GearIcon /> Preferences
                  </DropdownMenu.Item>
                  <DropdownMenu.Separator />
                  <DropdownMenu.Item color='red' shortcut='⌘ Q'>
                    <ExitIcon /> Log Out
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Root>
            </Flex>
          </Flex>

          {/* WELCOME CALLOUT */}
          <Callout.Root color={accentColor} variant='soft' mb='6'>
            <Callout.Icon>
              <InfoCircledIcon />
            </Callout.Icon>
            <Callout.Text>
              Selamat datang di **Radix Themes Sandbox**! Halaman ini
              mendemonstrasikan sistem tata letak, komponen interaktif, dialog
              modal, dan dukungan **Dark Mode**.
            </Callout.Text>
          </Callout.Root>

          {/* MAIN TABS */}
          <Tabs.Root defaultValue='overview'>
            <Tabs.List size='2' mb='5'>
              <Tabs.Trigger value='overview'>Dashboard Overview</Tabs.Trigger>
              <Tabs.Trigger value='users'>Data Pengguna</Tabs.Trigger>
              <Tabs.Trigger value='customize'>Theme Customizer</Tabs.Trigger>
            </Tabs.List>

            {/* TAB 1: OVERVIEW */}
            <Tabs.Content value='overview'>
              <Flex direction='column' gap='5'>
                {/* METRIC CARDS */}
                <Flex gap='4' direction={{ initial: "column", sm: "row" }}>
                  <Card size='2' style={{ flex: 1 }}>
                    <Flex direction='column' gap='1'>
                      <Text size='2' color='gray' weight='medium'>
                        Total Revenue
                      </Text>
                      <Heading size='6'>$45,231.89</Heading>
                      <Badge
                        color='green'
                        variant='soft'
                        style={{ width: "fit-content" }}
                        mt='1'>
                        +20.1% dari bulan lalu
                      </Badge>
                    </Flex>
                  </Card>

                  <Card size='2' style={{ flex: 1 }}>
                    <Flex direction='column' gap='1'>
                      <Text size='2' color='gray' weight='medium'>
                        Subscriptions
                      </Text>
                      <Heading size='6'>+2,350</Heading>
                      <Badge
                        color='indigo'
                        variant='soft'
                        style={{ width: "fit-content" }}
                        mt='1'>
                        +180.1% pengguna baru
                      </Badge>
                    </Flex>
                  </Card>

                  <Card size='2' style={{ flex: 1 }}>
                    <Flex direction='column' gap='1'>
                      <Text size='2' color='gray' weight='medium'>
                        Active Now
                      </Text>
                      <Heading size='6'>+573</Heading>
                      <Badge
                        color='orange'
                        variant='soft'
                        style={{ width: "fit-content" }}
                        mt='1'>
                        +201 dalam 1 jam terakhir
                      </Badge>
                    </Flex>
                  </Card>
                </Flex>

                {/* FORM & INTERACTIVE DEMO */}
                <Card size='3'>
                  <Flex direction='column' gap='4'>
                    <Flex justify='between' align='center' wrap='wrap' gap='2'>
                      <Box>
                        <Heading size='4'>Quick Actions & Modal Test</Heading>
                        <Text color='gray' size='2'>
                          Coba panggil Dialog Modal dari Radix untuk input data
                          baru.
                        </Text>
                      </Box>

                      {/* DIALOG / MODAL POPUP */}
                      <Dialog.Root>
                        <Dialog.Trigger>
                          <Button style={{ cursor: "pointer" }}>
                            <PlusIcon /> Tambah Data Baru
                          </Button>
                        </Dialog.Trigger>

                        <Dialog.Content style={{ maxWidth: 450 }}>
                          <Dialog.Title>Tambah Pengguna Baru</Dialog.Title>
                          <Dialog.Description size='2' color='gray' mb='4'>
                            Isi informasi berikut untuk menambahkan anggota tim
                            ke dalam sistem.
                          </Dialog.Description>

                          <Flex direction='column' gap='3'>
                            <Box>
                              <Text as='label' size='2' weight='bold' mb='1'>
                                Nama Lengkap
                              </Text>
                              <TextField.Root placeholder='Contoh: Alex Morgan' />
                            </Box>

                            <Box>
                              <Text as='label' size='2' weight='bold' mb='1'>
                                Alamat Email
                              </Text>
                              <TextField.Root placeholder='alex@company.com' />
                            </Box>
                          </Flex>

                          <Flex gap='3' mt='5' justify='end'>
                            <Dialog.Close>
                              <Button variant='soft' color='gray'>
                                Batal
                              </Button>
                            </Dialog.Close>
                            <Dialog.Close>
                              <Button>Simpan Data</Button>
                            </Dialog.Close>
                          </Flex>
                        </Dialog.Content>
                      </Dialog.Root>
                    </Flex>
                  </Flex>
                </Card>
              </Flex>
            </Tabs.Content>

            {/* TAB 2: DATA TABLE */}
            <Tabs.Content value='users'>
              <Card size='3'>
                <Flex direction='column' gap='4'>
                  <Flex justify='between' align='center' wrap='wrap' gap='2'>
                    <Heading size='4'>Daftar Pengguna</Heading>
                    <Box style={{ width: 250 }}>
                      <TextField.Root placeholder='Cari nama...'>
                        <TextField.Slot>
                          <MagnifyingGlassIcon height='16' width='16' />
                        </TextField.Slot>
                      </TextField.Root>
                    </Box>
                  </Flex>

                  <Table.Root variant='surface'>
                    <Table.Header>
                      <Table.Row>
                        <Table.ColumnHeaderCell>User</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>Role</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell align='right'>
                          Aksi
                        </Table.ColumnHeaderCell>
                      </Table.Row>
                    </Table.Header>

                    <Table.Body>
                      <Table.Row>
                        <Table.RowHeaderCell>
                          <Flex align='center' gap='3'>
                            <Avatar
                              fallback='JD'
                              size='1'
                              radius='full'
                              color='indigo'
                            />
                            <Box>
                              <Text weight='bold' size='2'>
                                Jane Doe
                              </Text>
                              <Text
                                size='1'
                                color='gray'
                                style={{ display: "block" }}>
                                jane@example.com
                              </Text>
                            </Box>
                          </Flex>
                        </Table.RowHeaderCell>
                        <Table.Cell>Lead Developer</Table.Cell>
                        <Table.Cell>
                          <Badge color='green' variant='soft'>
                            Active
                          </Badge>
                        </Table.Cell>
                        <Table.Cell align='right'>
                          <IconButton size='1' variant='ghost' color='gray'>
                            <DotsHorizontalIcon />
                          </IconButton>
                        </Table.Cell>
                      </Table.Row>

                      <Table.Row>
                        <Table.RowHeaderCell>
                          <Flex align='center' gap='3'>
                            <Avatar
                              fallback='AS'
                              size='1'
                              radius='full'
                              color='amber'
                            />
                            <Box>
                              <Text weight='bold' size='2'>
                                Ahmad Subagja
                              </Text>
                              <Text
                                size='1'
                                color='gray'
                                style={{ display: "block" }}>
                                ahmad@example.com
                              </Text>
                            </Box>
                          </Flex>
                        </Table.RowHeaderCell>
                        <Table.Cell>UI/UX Designer</Table.Cell>
                        <Table.Cell>
                          <Badge color='orange' variant='soft'>
                            Pending
                          </Badge>
                        </Table.Cell>
                        <Table.Cell align='right'>
                          <IconButton size='1' variant='ghost' color='gray'>
                            <DotsHorizontalIcon />
                          </IconButton>
                        </Table.Cell>
                      </Table.Row>
                    </Table.Body>
                  </Table.Root>
                </Flex>
              </Card>
            </Tabs.Content>

            {/* TAB 3: CUSTOMIZE (LIVE THEME SWITCHER) */}
            <Tabs.Content value='customize'>
              <Card size='3'>
                <Flex direction='column' gap='4'>
                  <Heading size='4'>Theme & UI Settings</Heading>
                  <Text size='2' color='gray'>
                    Ubah warna aksen, mode tampilan, dan bentuk sudut komponen
                    secara *real-time*.
                  </Text>

                  <Separator size='4' />

                  {/* APPEARANCE TOGGLE SWITCH */}
                  <Flex align='center' justify='between'>
                    <Box>
                      <Text size='2' weight='bold' style={{ display: "block" }}>
                        Dark Mode
                      </Text>
                      <Text size='1' color='gray'>
                        Aktifkan mode gelap untuk mengurangi ketegangan mata.
                      </Text>
                    </Box>
                    <Switch
                      checked={appearance === "dark"}
                      onCheckedChange={toggleAppearance}
                      style={{ cursor: "pointer" }}
                    />
                  </Flex>

                  <Separator size='4' />

                  {/* ACCENT COLOR PICKER */}
                  <Box>
                    <Text
                      size='2'
                      weight='bold'
                      mb='2'
                      style={{ display: "block" }}>
                      Accent Color:
                    </Text>
                    <Flex gap='2' wrap='wrap'>
                      {[
                        "indigo",
                        "cyan",
                        "green",
                        "crimson",
                        "orange",
                        "violet",
                      ].map((color) => (
                        <Button
                          key={color}
                          size='2'
                          color={color}
                          variant={accentColor === color ? "solid" : "soft"}
                          onClick={() => setAccentColor(color)}
                          style={{
                            cursor: "pointer",
                            textTransform: "capitalize",
                          }}>
                          {color} {accentColor === color && <CheckIcon />}
                        </Button>
                      ))}
                    </Flex>
                  </Box>

                  {/* RADIUS SELECTOR */}
                  <Box>
                    <Text
                      size='2'
                      weight='bold'
                      mb='2'
                      style={{ display: "block" }}>
                      Border Radius:
                    </Text>
                    <Flex gap='2'>
                      {["none", "small", "medium", "large", "full"].map((r) => (
                        <Button
                          key={r}
                          size='2'
                          variant={radius === r ? "solid" : "outline"}
                          onClick={() => setRadius(r)}
                          style={{
                            cursor: "pointer",
                            textTransform: "capitalize",
                          }}>
                          {r}
                        </Button>
                      ))}
                    </Flex>
                  </Box>

                  <Separator size='4' />

                  {/* SLIDER & SWITCH DEMO */}
                  <Flex direction='column' gap='3'>
                    <Flex align='center' justify='between'>
                      <Text size='2' weight='bold'>
                        Notifikasi Email
                      </Text>
                      <Switch
                        checked={notifications}
                        onCheckedChange={setNotifications}
                        style={{ cursor: "pointer" }}
                      />
                    </Flex>

                    <Box>
                      <Flex justify='between' mb='1'>
                        <Text size='2' weight='bold'>
                          Volume Sound Effect
                        </Text>
                        <Text size='2' color='gray'>
                          {volume[0]}%
                        </Text>
                      </Flex>
                      <Slider
                        value={volume}
                        onValueChange={setVolume}
                        max={100}
                        step={1}
                      />
                    </Box>
                  </Flex>
                </Flex>
              </Card>
            </Tabs.Content>
          </Tabs.Root>

          {/* FOOTER */}
          <Flex justify='center' align='center' gap='2' mt='8'>
            <Text size='2' color='gray'>
              Built with
            </Text>
            <Tooltip content='Radix Themes System'>
              <Badge color={accentColor} radius='full'>
                Radix UI
              </Badge>
            </Tooltip>
          </Flex>
        </Box>
      </Box>
    </Theme>
  );
}
