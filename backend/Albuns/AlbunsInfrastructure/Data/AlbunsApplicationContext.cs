using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using AlbunsDomain.Models;

namespace AlbunsInfrastructure.Data
{
    public class AlbunsApplicationContext : DbContext
    {
        public AlbunsApplicationContext (DbContextOptions<AlbunsApplicationContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Album>()
                .HasMany(e => e.Musicas)
                .WithOne()
                .HasForeignKey(p => p.AlbumId)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<Album>()
                .Property(x => x.AlbumId)
                .HasDefaultValueSql("NEWID()");

            modelBuilder.Entity<Musica>()
                .Property(x => x.MusicaId)
                .HasDefaultValueSql("NEWID()");
        }

        public DbSet<AlbunsDomain.Models.Album> Album { get; set; }
        public DbSet<Musica> Musica { get; set; }

    }
}
