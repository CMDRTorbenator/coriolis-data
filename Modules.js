module.exports = {
  standard: [
    require('./modules/standard/power_plant'),
    require('./modules/standard/thrusters'),
    require('./modules/standard/frame_shift_drive'),
    require('./modules/standard/life_support'),
    require('./modules/standard/power_distributor'),
    require('./modules/standard/sensors'),
    require('./modules/standard/fuel_tank')
  ],
  hardpoints: {
    pl: require('./modules/hardpoints/pulse_laser').pl,
    ul: require('./modules/hardpoints/burst_laser').ul,
    bl: require('./modules/hardpoints/beam_laser').bl,
    mc: require('./modules/hardpoints/multi_cannon').mc,
    c: require('./modules/hardpoints/cannon').c,
    fc: require('./modules/hardpoints/fragment_cannon').fc,
    rg: require('./modules/hardpoints/rail_gun').rg,
    pa: require('./modules/hardpoints/plasma_accelerator').pa,
    mr: require('./modules/hardpoints/missile_rack').mr,
    tp: require('./modules/hardpoints/torpedo_pylon').tp,
    nl: require('./modules/hardpoints/mine_launcher').nl,
    ml: require('./modules/hardpoints/mining_laser').ml,
    cs: require('./modules/hardpoints/cargo_scanner').cs,
    cm: require('./modules/hardpoints/countermeasures').cm,
    ws: require('./modules/hardpoints/frame_shift_wake_scanner').ws,
    kw: require('./modules/hardpoints/kill_warrant_scanner').kw,
    sb: require('./modules/hardpoints/shield_booster').sb
  },
  internal: {
    am: require('./modules/internal/auto_field_maintenance_unit').am,
    bsg: require('./modules/internal/bi_weave_shield_generator').bsg,
    cr: require('./modules/internal/cargo_rack').cr,
    cc: require('./modules/internal/collector_limpet_controllers').cc,
    dc: require('./modules/internal/docking_computer').dc,
    fi: require('./modules/internal/frame_shift_drive_interdictor').fi,
    fs: require('./modules/internal/fuel_scoop').fs,
    fx: require('./modules/internal/fuel_transfer_limpet_controllers').fx,
    hb: require('./modules/internal/hatch_breaker_limpet_controller').hb,
    hr: require('./modules/internal/hull_reinforcement_package').hr,
    ft: require('./modules/internal/internal_fuel_tank').ft,
    pv: require('./modules/internal/planetary_vehicle_hanger').pv,
    psg: require('./modules/internal/pristmatic_shield_generator').psg,
    pc: require('./modules/internal/prospector_limpet_controllers').pc,
    rf: require('./modules/internal/refinery').rf,
    sc: require('./modules/internal/scanner').sc,
    scb: require('./modules/internal/shield_cell_bank').scb,
    sg: require('./modules/internal/shield_generator').sg
  }
};
