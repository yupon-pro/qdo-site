"use client";

import { ImageList, ImageListItem, Typography, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import { Fragment } from "react";
import PhotoDialog from "../Component/Dialog/PhotoDialog";

import OgoriCastle from "../../../public/thirdparty/fukuoka/小郡城.jpeg";
import UkihaStrawberries from "../../../public/thirdparty/fukuoka/うきはのいちご.jpeg";
import YameLanterns from "../../../public/thirdparty/fukuoka/八女提灯.jpeg";
import KashiwaRice from "../../../public/thirdparty/fukuoka/かしわ飯.jpeg";
import OrleOshimaMunakata from "../../../public/thirdparty/fukuoka/オルレ大島宗像.jpeg";
import KurumeAzaleaPark from "../../../public/thirdparty/fukuoka/久留米つつじ公園.jpeg";
import YataiStalls from "../../../public/thirdparty/fukuoka/屋台.jpeg";
import Itoshima from "../../../public/thirdparty/fukuoka/糸島.jpeg";
import WorkScene from "../../../public/thirdparty/fukuoka/作業風景.jpeg";
import KarashiMentaiko from "../../../public/thirdparty/fukuoka/辛子明太子.jpeg";
import TenjinCentralPark from "../../../public/thirdparty/fukuoka/天神中央公園.jpeg";
import HoshinoVillageTerracedRiceFields from "../../../public/thirdparty/fukuoka/星野村棚田.jpeg";
import KyushuNationalMuseum from "../../../public/thirdparty/fukuoka/九州国立博物館.jpeg";
import HakataRamen from "../../../public/thirdparty/fukuoka/博多ラーメン.jpeg";
import OkawaKumiko from "../../../public/thirdparty/fukuoka/大川組子.jpeg";
import UkihaInariShrine from "../../../public/thirdparty/fukuoka/浮羽稲荷神社.jpeg";
import YanagawaHinamatsuri from "../../../public/thirdparty/fukuoka/柳川雛祭り.jpeg";
import YanagawaMari from "../../../public/thirdparty/fukuoka/柳川まり.jpeg";
import KitakyushuAirport from "../../../public/thirdparty/fukuoka/北九州空港.jpeg";
import YanagawaRiverCruise from "../../../public/thirdparty/fukuoka/柳川川下り.jpeg";

const images = [
  { title: "小郡城", url: OgoriCastle, row: 2 },
  { title: "うきはのいちご", url: UkihaStrawberries },
  { title: "八女提灯", url: YameLanterns, row: 2, col: 2 },
  { title: "かしわ飯", url: KashiwaRice },
  { title: "オルレ大島宗像", url: OrleOshimaMunakata, row: 2, col: 2 },
  { title: "久留米つつじ公園", url: KurumeAzaleaPark, col: 2 },
  { title: "屋台", url: YataiStalls },
  { title: "糸島", url: Itoshima },
  { title: "作業風景", url: WorkScene, row: 2 },
  { title: "辛子明太子", url: KarashiMentaiko },
  { title: "天神中央公園", url: TenjinCentralPark, row: 2, col: 2 },
  { title: "星野村棚田", url: HoshinoVillageTerracedRiceFields },
  { title: "九州国立博物館", url: KyushuNationalMuseum, row: 2, col: 2 },
  { title: "博多ラーメン", url: HakataRamen },
  { title: "大川組子", url: OkawaKumiko, row: 2 },
  { title: "浮羽稲荷神社", url: UkihaInariShrine },
  { title: "柳川雛祭り", url: YanagawaHinamatsuri, row: 2 },
  { title: "柳川まり", url: YanagawaMari },
  { title: "北九州空港", url: KitakyushuAirport, row: 2, col: 2 },
  { title: "柳川川下り", url: YanagawaRiverCruise },
];

export default function FukuokaImpression() {
  const matches = useMediaQuery("(max-width:600px)");

  return (
    <Fragment>
      <Box justifyContent="center">
        <Box>
          <Typography variant="h4" align="center">
            Impression
          </Typography>
          <Typography variant="caption" align="center">
            ©Fukuoka prefecture travel association
          </Typography>
        </Box>
      </Box>
      <ImageList
        sx={{ width: { xs: 300, sm: 400, md: 650 }, height: 1250 }}
        variant="quilted"
        cols={matches ? 1 : 4}
        rowHeight={matches ? 150 : 121}
      >
        {images.map((image) => (
          <ImageListItem key={image.title} cols={matches ? 1 : image.col || 1} rows={matches ? 1 : image.row || 1}>
            <PhotoDialog image={{ title: image.title, url: image.url }} />
          </ImageListItem>
        ))}
      </ImageList>
    </Fragment>
  );
}
