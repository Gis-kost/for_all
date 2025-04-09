ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([4174813.126336, 7501421.951336, 4200252.813836, 7517435.857586]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_2gisMap_1 = new ol.layer.Tile({
            'title': '2gis Map',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile2.maps.2gis.com/tiles?x={x}&y={y}&z={z}&v=1.1'
            })
        });

        var lyr_OSMStandard_2 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 0.200000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr__3 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://nspd.gov.ru/api/aeggis/v4/36048/wms",
                              attributions: ' ',
                              params: {
                                "LAYERS": "36048",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'НСПД: Земельные участки ЕГРН',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr__3, 0]);
var lyr__4 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://nspd.gov.ru/api/aeggis/v4/36327/wms",
                              attributions: ' ',
                              params: {
                                "LAYERS": "36327",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'НСПД: Земельные участки ЕГРН подписи',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr__4, 0]);
var lyr__5 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://nspd.gov.ru/api/aeggis/v4/36328/wms",
                              attributions: ' ',
                              params: {
                                "LAYERS": "36328",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'НСПД: Сооружения ЕГРН',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr__5, 0]);
var lyr__6 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://nspd.gov.ru/api/aeggis/v4/36049/wms",
                              attributions: ' ',
                              params: {
                                "LAYERS": "36049",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'НСПД: Здания ЕГРН',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr__6, 0]);
var lyr__7 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://nspd.gov.ru/api/aeggis/v4/36326/wms",
                              attributions: ' ',
                              params: {
                                "LAYERS": "36326",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'НСПД: Здания ЕГРН подписи',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr__7, 0]);
var format_15_8 = new ol.format.GeoJSON();
var features_15_8 = format_15_8.readFeatures(json_15_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_15_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_15_8.addFeatures(features_15_8);
var lyr_15_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_15_8, 
                style: style_15_8,
                popuplayertitle: 'Изохрона 15 минут',
                interactive: true,
                title: '<img src="styles/legend/15_8.png" /> Изохрона 15 минут'
            });
var format_15_9 = new ol.format.GeoJSON();
var features_15_9 = format_15_9.readFeatures(json_15_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_15_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_15_9.addFeatures(features_15_9);
var lyr_15_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_15_9, 
                style: style_15_9,
                popuplayertitle: 'Граф 15 мин пеший',
                interactive: false,
                title: '<img src="styles/legend/15_9.png" /> Граф 15 мин пеший'
            });
var format__10 = new ol.format.GeoJSON();
var features__10 = format__10.readFeatures(json__10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__10.addFeatures(features__10);
var lyr__10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__10, 
                style: style__10,
                popuplayertitle: 'Центроид',
                interactive: false,
                title: '<img src="styles/legend/_10.png" /> Центроид'
            });
var format_L3_11 = new ol.format.GeoJSON();
var features_L3_11 = format_L3_11.readFeatures(json_L3_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_L3_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_L3_11.addFeatures(features_L3_11);
var lyr_L3_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_L3_11, 
                style: style_L3_11,
                popuplayertitle: 'Шумовая карта: автодороги L3',
                interactive: false,
    title: 'Шумовая карта: автодороги L3<br />\
    <img src="styles/legend/L3_11_0.png" /> primary<br />\
    <img src="styles/legend/L3_11_1.png" /> secondary<br />\
    <img src="styles/legend/L3_11_2.png" /> tertiary<br />' });
var format_L2_12 = new ol.format.GeoJSON();
var features_L2_12 = format_L2_12.readFeatures(json_L2_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_L2_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_L2_12.addFeatures(features_L2_12);
var lyr_L2_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_L2_12, 
                style: style_L2_12,
                popuplayertitle: 'Шумовая карта: автодороги L2',
                interactive: false,
    title: 'Шумовая карта: автодороги L2<br />\
    <img src="styles/legend/L2_12_0.png" /> primary<br />\
    <img src="styles/legend/L2_12_1.png" /> secondary<br />\
    <img src="styles/legend/L2_12_2.png" /> tertiary<br />' });
var format__L1_13 = new ol.format.GeoJSON();
var features__L1_13 = format__L1_13.readFeatures(json__L1_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__L1_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__L1_13.addFeatures(features__L1_13);
var lyr__L1_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__L1_13, 
                style: style__L1_13,
                popuplayertitle: 'Шумовая_карта: автодороги L1',
                interactive: false,
    title: 'Шумовая_карта: автодороги L1<br />\
    <img src="styles/legend/_L1_13_0.png" /> primary<br />' });

lyr_GoogleSatellite_0.setVisible(false);lyr_2gisMap_1.setVisible(false);lyr_OSMStandard_2.setVisible(true);lyr__3.setVisible(false);lyr__4.setVisible(false);lyr__5.setVisible(false);lyr__6.setVisible(false);lyr__7.setVisible(false);lyr_15_8.setVisible(true);lyr_15_9.setVisible(true);lyr__10.setVisible(true);lyr_L3_11.setVisible(false);lyr_L2_12.setVisible(false);lyr__L1_13.setVisible(false);
var layersList = [lyr_GoogleSatellite_0,lyr_2gisMap_1,lyr_OSMStandard_2,lyr__3,lyr__4,lyr__5,lyr__6,lyr__7,lyr_15_8,lyr_15_9,lyr__10,lyr_L3_11,lyr_L2_12,lyr__L1_13];
lyr_15_8.set('fieldAliases', {'id_0': 'id_0', 'id': 'id', 'cad_num': 'cad_num', 'area': 'area', 'perimeter': 'perimeter', });
lyr_15_9.set('fieldAliases', {'id_0': 'id_0', 'id': 'id', 'zy_fid': 'zy_fid', 'cad_num': 'cad_num', 'zy_geom_32637': 'zy_geom_32637', 'g_name': 'g_name', 'l_fid': 'l_fid', 'площадь_с_зеленью': 'площадь_с_зеленью', 'n_fid': 'n_fid', 'колич_деревьев': 'колич_деревьев', 'name': 'name', 'noise_l1': 'noise_l1', 'noise_l2': 'noise_l2', 'noise_l3': 'noise_l3', 'roads_type': 'roads_type', 'roads_fclass_silence': 'roads_fclass_silence', 'len_roads_100m_silence': 'len_roads_100m_silence', 'roads_fclass_loud': 'roads_fclass_loud', 'len_roads_100m_loud': 'len_roads_100m_loud', 'type': 'type', 'start': 'start', });
lyr__10.set('fieldAliases', {'id_0': 'id_0', 'id': 'id', 'zy_fid': 'zy_fid', 'cad_num': 'cad_num', 'zy_geom_32637': 'zy_geom_32637', 'g_name': 'g_name', 'l_fid': 'l_fid', 'площадь_с_зеленью': 'площадь_с_зеленью', 'n_fid': 'n_fid', 'колич_деревьев': 'колич_деревьев', 'name': 'name', 'noise_l1': 'noise_l1', 'noise_l2': 'noise_l2', 'noise_l3': 'noise_l3', 'roads_type': 'roads_type', 'roads_fclass_silence': 'roads_fclass_silence', 'len_roads_100m_silence': 'len_roads_100m_silence', 'roads_fclass_loud': 'roads_fclass_loud', 'len_roads_100m_loud': 'len_roads_100m_loud', });
lyr_L3_11.set('fieldAliases', {'id_0': 'id_0', 'id': 'id', 'fclass': 'fclass', });
lyr_L2_12.set('fieldAliases', {'id_0': 'id_0', 'id': 'id', 'fclass': 'fclass', });
lyr__L1_13.set('fieldAliases', {'id_0': 'id_0', 'id': 'id', 'fclass': 'fclass', });
lyr_15_8.set('fieldImages', {'id_0': 'TextEdit', 'id': 'Range', 'cad_num': 'TextEdit', 'area': 'TextEdit', 'perimeter': 'TextEdit', });
lyr_15_9.set('fieldImages', {'id_0': 'TextEdit', 'id': 'Range', 'zy_fid': 'TextEdit', 'cad_num': 'TextEdit', 'zy_geom_32637': 'TextEdit', 'g_name': 'TextEdit', 'l_fid': 'TextEdit', 'площадь_с_зеленью': 'TextEdit', 'n_fid': 'TextEdit', 'колич_деревьев': 'TextEdit', 'name': 'TextEdit', 'noise_l1': 'TextEdit', 'noise_l2': 'TextEdit', 'noise_l3': 'TextEdit', 'roads_type': 'TextEdit', 'roads_fclass_silence': 'TextEdit', 'len_roads_100m_silence': 'TextEdit', 'roads_fclass_loud': 'TextEdit', 'len_roads_100m_loud': 'TextEdit', 'type': 'TextEdit', 'start': 'TextEdit', });
lyr__10.set('fieldImages', {'id_0': 'TextEdit', 'id': 'Range', 'zy_fid': 'TextEdit', 'cad_num': 'TextEdit', 'zy_geom_32637': 'TextEdit', 'g_name': 'TextEdit', 'l_fid': 'TextEdit', 'площадь_с_зеленью': 'TextEdit', 'n_fid': 'TextEdit', 'колич_деревьев': 'TextEdit', 'name': 'TextEdit', 'noise_l1': 'TextEdit', 'noise_l2': 'TextEdit', 'noise_l3': 'TextEdit', 'roads_type': 'TextEdit', 'roads_fclass_silence': 'TextEdit', 'len_roads_100m_silence': 'TextEdit', 'roads_fclass_loud': 'TextEdit', 'len_roads_100m_loud': 'TextEdit', });
lyr_L3_11.set('fieldImages', {'id_0': 'TextEdit', 'id': 'Range', 'fclass': 'TextEdit', });
lyr_L2_12.set('fieldImages', {'id_0': 'TextEdit', 'id': 'Range', 'fclass': 'TextEdit', });
lyr__L1_13.set('fieldImages', {'id_0': 'TextEdit', 'id': 'Range', 'fclass': 'TextEdit', });
lyr_15_8.set('fieldLabels', {'id_0': 'no label', 'id': 'no label', 'cad_num': 'inline label - always visible', 'area': 'no label', 'perimeter': 'no label', });
lyr_15_9.set('fieldLabels', {'id_0': 'no label', 'id': 'no label', 'zy_fid': 'no label', 'cad_num': 'no label', 'zy_geom_32637': 'no label', 'g_name': 'no label', 'l_fid': 'no label', 'площадь_с_зеленью': 'no label', 'n_fid': 'no label', 'колич_деревьев': 'no label', 'name': 'no label', 'noise_l1': 'no label', 'noise_l2': 'no label', 'noise_l3': 'no label', 'roads_type': 'no label', 'roads_fclass_silence': 'no label', 'len_roads_100m_silence': 'no label', 'roads_fclass_loud': 'no label', 'len_roads_100m_loud': 'no label', 'type': 'no label', 'start': 'no label', });
lyr__10.set('fieldLabels', {'id_0': 'hidden field', 'id': 'hidden field', 'zy_fid': 'hidden field', 'cad_num': 'hidden field', 'zy_geom_32637': 'hidden field', 'g_name': 'hidden field', 'l_fid': 'hidden field', 'площадь_с_зеленью': 'hidden field', 'n_fid': 'hidden field', 'колич_деревьев': 'hidden field', 'name': 'hidden field', 'noise_l1': 'hidden field', 'noise_l2': 'hidden field', 'noise_l3': 'hidden field', 'roads_type': 'hidden field', 'roads_fclass_silence': 'hidden field', 'len_roads_100m_silence': 'hidden field', 'roads_fclass_loud': 'hidden field', 'len_roads_100m_loud': 'hidden field', });
lyr_L3_11.set('fieldLabels', {'id_0': 'inline label - visible with data', 'id': 'inline label - visible with data', 'fclass': 'inline label - visible with data', });
lyr_L2_12.set('fieldLabels', {'id_0': 'inline label - visible with data', 'id': 'inline label - visible with data', 'fclass': 'inline label - visible with data', });
lyr__L1_13.set('fieldLabels', {'id_0': 'inline label - visible with data', 'id': 'inline label - visible with data', 'fclass': 'inline label - visible with data', });
lyr__L1_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});