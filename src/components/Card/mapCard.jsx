import React from "react";

const GoogleMapCard = () => {
  const googleMapsLink =
    "https://www.google.com/maps?q=House+No,+IT+Support+Training,+13B+St+331,+Phnom+Penh+12352&ftid=0x3109513e7cafcb87:0x499d1f16b60085d7&hl=en-KH&gl=kh&entry=gps&lucs=,47071704,47086688&g_ep=CAISDDYuODYuMS4xNTU2MBgAINeCAyoSLDQ3MDcxNzA0LDQ3MDg2Njg4QgJLSA%3D%3D&g_st=it";

  const mapPreviewSrc =
    "https://maps.googleapis.com/maps/api/staticmap?center=11.569567,104.892182&zoom=15&size=600x300&maptype=roadmap&markers=color:red%7Clabel:A%7C11.569567,104.892182&key=YOUR_GOOGLE_MAPS_API_KEY";

  return (
    <div
      onClick={() => window.open(googleMapsLink, "_blank")}
      style={{
        cursor: "pointer",
        width: "100%",
        maxWidth: "800px",
        borderRadius: "10px",
        overflow: "hidden",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        border: "1px solid #ddd",
      }}
    >
      <img
        src={mapPreviewSrc}
        alt="Map Preview"
        style={{ width: "100%", height: "200px" }}
      />
      <div style={{ padding: "10px", background: "#fff", textAlign: "center" }}>
        <h3 style={{ margin: "5px 0" }}>View on Google Maps</h3>
      </div>
    </div>
  );
};

export default GoogleMapCard;
