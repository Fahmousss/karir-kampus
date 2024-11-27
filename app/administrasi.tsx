import React, { useCallback, useRef } from "react";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import { Container } from "~/components/Container";
import { DialogForm } from "~/components/DialogForm";
import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { Input } from "~/components/ui/input";
import { Text } from "~/components/ui/text";

export default function AdministrasiScreen() {
  return (
    <Container title="Administrasi">
      <View>
        <View className="mb-4 items-center">
          <Image source={require("assets/images/welcome_pict.png")} />
        </View>
        <View className="mb-3">
          <Text
            className="mb-3 text-2xl"
            style={{
              fontFamily: "Outfit_600SemiBold",
            }}
          >
            Pengumpulan Berkas Kerja Praktik
          </Text>
          <View className="gap-3">
            <Button className="items-start" variant={"outline"}>
              <Text>Berkas Pengajuan Dosen Pembimbing</Text>
            </Button>
            <DialogForm
              title="Surat Pengunduran Diri Dosen Pembimbing"
              trigger={
                <Button className="items-start" variant={"outline"}>
                  <Text>Surat Pengunduran Diri Dosen Pembimbing</Text>
                </Button>
              }
              footer={
                <View className="w-full border p-2">
                  <View className="flex flex-row justify-between max-w-sm">
                    <Text>Berkas</Text>
                    <Text>*</Text>
                  </View>
                  <View className="gap-3">
                    <Button variant={"outline"}>
                      <Text>+ Tambah</Text>
                    </Button>
                    <Button className="bg-[#99D1FF]">
                      <Text className="text-black">Kumpulkan</Text>
                    </Button>
                  </View>
                </View>
              }
            >
              <View className="w-full">
                <View className="mb-10">
                  <Text>Bryan Hanggara - 17:05</Text>
                  <Text className="text-xs">Note :</Text>
                  <Text className="text-xs">
                    Diisi bila dosen mengundurkan diri
                  </Text>
                </View>
                <View className="mb-20 flex flex-row justify-between border-b">
                  <Text className="text-xs">
                    Format File PDF dengan ukuran maksimal 5mb
                  </Text>
                  <Text className="text-xs underline">Cek Komentar</Text>
                </View>
              </View>
            </DialogForm>
            <DialogForm
              title="Pengumpulan Proposal"
              trigger={
                <Button className="items-start" variant={"outline"}>
                  <Text>Pengumpulan Proposal</Text>
                </Button>
              }
              footer={
                <View className="w-full border p-2">
                  <View className="flex flex-row justify-between max-w-sm">
                    <Text>Berkas</Text>
                    <Text>*</Text>
                  </View>
                  <View className="gap-3">
                    <Button variant={"outline"}>
                      <Text>+ Tambah</Text>
                    </Button>
                    <Button className="bg-[#99D1FF]">
                      <Text className="text-black">Kumpulkan</Text>
                    </Button>
                  </View>
                </View>
              }
            >
              <View className="w-full">
                <View className="mb-10">
                  <Text>Bryan Hanggara - 17:05</Text>
                </View>
                <View className="mb-20 flex flex-row justify-between border-b">
                  <Text className="text-xs">
                    Format File PDF dengan ukuran maksimal 5mb
                  </Text>
                  <Text className="text-xs underline">Cek Komentar</Text>
                </View>
              </View>
            </DialogForm>
            <DialogForm
              title="Surat Permohonan Izin Kerja Praktik"
              trigger={
                <Button className="items-start" variant={"outline"}>
                  <Text>Surat Permohonan Izin Kerja Praktik</Text>
                </Button>
              }
              footer={
                <View className="w-full border p-2">
                  <View className="flex flex-row justify-between max-w-sm">
                    <Text>Berkas</Text>
                    <Text>*</Text>
                  </View>
                  <View className="gap-3">
                    <Button variant={"outline"}>
                      <Text>+ Tambah</Text>
                    </Button>
                    <Button className="bg-[#99D1FF]">
                      <Text className="text-black">Kumpulkan</Text>
                    </Button>
                  </View>
                </View>
              }
            >
              <View className="w-full">
                <View className="mb-10">
                  <Text>Bryan Hanggara - 17:05</Text>
                </View>
                <View className="mb-20 flex flex-row justify-between border-b">
                  <Text className="text-xs">
                    Format File PDF dengan ukuran maksimal 5mb
                  </Text>
                  <Text className="text-xs underline">Cek Komentar</Text>
                </View>
              </View>
            </DialogForm>
            <DialogForm
              title="Laporan Akhir Kerja Praktik"
              trigger={
                <Button className="items-start" variant={"outline"}>
                  <Text>Laporan Akhir Kerja Praktik</Text>
                </Button>
              }
              footer={
                <View className="w-full border p-2">
                  <View className="flex flex-row justify-between max-w-sm">
                    <Text>Berkas</Text>
                    <Text>*</Text>
                  </View>
                  <View className="gap-3">
                    <Button variant={"outline"}>
                      <Text>+ Tambah</Text>
                    </Button>
                    <Button className="bg-[#99D1FF]">
                      <Text className="text-black">Kumpulkan</Text>
                    </Button>
                  </View>
                </View>
              }
            >
              <View className="w-full">
                <View className="mb-10">
                  <Text>Bryan Hanggara - 17:05</Text>
                </View>
                <View className="mb-20 flex flex-row justify-between border-b">
                  <Text className="text-xs">
                    Format File PDF dengan ukuran maksimal 5mb
                  </Text>
                  <Text className="text-xs underline">Cek Komentar</Text>
                </View>
              </View>
            </DialogForm>
            <DialogForm
              title="Formulir Kegiatan Harian"
              trigger={
                <Button className="items-start" variant={"outline"}>
                  <Text>Formulir Kegiatan Harian</Text>
                </Button>
              }
              footer={
                <View className="w-full border p-2">
                  <View className="flex flex-row justify-between max-w-sm">
                    <Text>Berkas</Text>
                    <Text>*</Text>
                  </View>
                  <View className="gap-3">
                    <Button variant={"outline"}>
                      <Text>+ Tambah</Text>
                    </Button>
                    <Button className="bg-[#99D1FF]">
                      <Text className="text-black">Kumpulkan</Text>
                    </Button>
                  </View>
                </View>
              }
            >
              <View className="w-full">
                <View className="mb-10">
                  <Text>Bryan Hanggara - 17:05</Text>
                </View>
                <View className="mb-20 flex flex-row justify-between border-b">
                  <Text className="text-xs">
                    Format File PDF dengan ukuran maksimal 5mb
                  </Text>
                  <Text className="text-xs underline">Cek Komentar</Text>
                </View>
              </View>
            </DialogForm>
          </View>
        </View>
        <View className="mb-3">
          <Text
            className="mb-3 text-2xl"
            style={{
              fontFamily: "Outfit_600SemiBold",
            }}
          >
            Admin
          </Text>
          <View className="gap-3">
            <Button className="items-start" variant={"outline"}>
              <Text>Surat Persetujuan Pembimbing oleh Ketua Jurusan</Text>
            </Button>
            <Button className="items-start" variant={"outline"}>
              <Text>
                Surat Persetujuan Izin KP Wakil Dekan dan Ketua Jurusan
              </Text>
            </Button>
          </View>
        </View>
      </View>
    </Container>
  );
}